import React from 'react'
import {mount, getStyles, applyTheme} from '../utils/test-utils'
import {normalize as nc} from '../utils/colors'
import theme from '../theme/base'
import i18n from '../theme/base/i18n'
import Calendar from './Calendar'

describe('<Calendar />', () => {
  const getClasses = wrapper => {
    const {classes} = wrapper.find('Calendar').props()

    return Object.keys(classes).reduce(
      (obj, key) => ({
        ...obj,
        [key]: classes[key]
          .split(/\s+/)
          .map(i => '.' + i)
          .join(' ')
      }),
      {}
    )
  }

  const date = new Date(2018, 5, 15)
  const dateTo = new Date(2018, 5, 17)
  const {calendar} = theme

  const defaultPropsToggle = {
    onChange: () => {}
  }

  let event, value
  beforeEach(() => {
    spyOn(defaultPropsToggle, 'onChange').and.callFake((e, val) => {
      event = e
      value = val
    })
  })

  it('check a today', done => {
    const wrapper = mount(
      applyTheme(
        <Calendar {...defaultPropsToggle} today={date} initDate={date} />
      )
    )

    const classes = getClasses(wrapper)
    const day = wrapper.find(classes.isToday)

    expect(day.text()).toEqual(date.getDate().toFixed(0))
    expect(getStyles(day)['color']).toEqual(nc(calendar.colors.today.text))
    expect(getStyles(day)['font-weight']).toEqual('500')

    day.simulate('click')
    expect(event.type).toEqual('click')
    expect(value.getDate()).toEqual(date.getDate())
    expect(value.getMonth()).toEqual(date.getMonth())
    expect(value.getFullYear()).toEqual(date.getFullYear())

    done()
  })

  it('check the heading with year', done => {
    const wrapper = mount(applyTheme(<Calendar initDate={date} />))

    const classes = getClasses(wrapper)
    const node = wrapper.find(classes.month)

    let month = date.getMonth()
    let year = date.getFullYear()

    expect(node.text()).toEqual(i18n.months[month] + ', ' + year)

    wrapper.find(classes.next).simulate('click')
    expect(node.text()).toEqual(i18n.months[month + 1] + ', ' + year)

    done()
  })

  it('check the heading without year', done => {
    const wrapper = mount(
      applyTheme(<Calendar initDate={date} showYear={false} />)
    )

    const classes = getClasses(wrapper)
    const node = wrapper.find(classes.month)
    const month = date.getMonth()

    expect(node.text()).toEqual(i18n.months[month])

    done()
  })

  it('check selected date', done => {
    const wrapper = mount(applyTheme(<Calendar value={date} initDate={date} />))

    const classes = getClasses(wrapper)
    const day = wrapper.find(classes.isActive)

    expect(day.text()).toEqual(date.getDate().toFixed(0))
    expect(getStyles(day)['color']).toEqual(nc(calendar.colors.active.text))
    expect(getStyles(day)['background-color']).toEqual(
      nc(calendar.colors.active.background)
    )

    done()
  })

  it('check selected range', done => {
    const wrapper = mount(
      applyTheme(<Calendar value={[date, dateTo]} initDate={date} range />)
    )

    const classes = getClasses(wrapper)
    const days = wrapper.find(classes.isActive)
    const selected = wrapper.find(classes.isSelected)

    expect(days.at(0).text()).toEqual(date.getDate().toFixed(0))
    expect(getStyles(days.at(0))['color']).toEqual(
      nc(calendar.colors.active.text)
    )
    expect(getStyles(days.at(0))['background-color']).toEqual(
      nc(calendar.colors.active.background)
    )

    expect(days.at(1).text()).toEqual(dateTo.getDate().toFixed(0))
    expect(getStyles(days.at(1))['color']).toEqual(
      nc(calendar.colors.active.text)
    )
    expect(getStyles(days.at(1))['background-color']).toEqual(
      nc(calendar.colors.active.background)
    )

    expect(selected.at(0).text()).toEqual((date.getDate() + 1).toFixed(0))
    expect(getStyles(selected.at(0))['color']).toEqual(
      nc(calendar.colors.selected.text)
    )
    expect(getStyles(selected.at(0))['background-color']).toEqual(
      nc(calendar.colors.selected.background)
    )

    done()
  })

  it('check visibleMonths', done => {
    const wrapper = mount(
      applyTheme(
        <Calendar
          visibleMonths={3}
          value={[date, dateTo]}
          initDate={date}
          range
        />
      )
    )

    const classes = getClasses(wrapper)
    const calendars = wrapper.find(classes.root)

    expect(calendars.length).toEqual(3)

    done()
  })

  it('check arrow count', done => {
    const wrapper = mount(
      applyTheme(
        <Calendar
          visibleMonths={3}
          value={[date, dateTo]}
          initDate={date}
          range
        />
      )
    )

    const classes = getClasses(wrapper)
    const prev = wrapper.find(classes.prev).not(classes.arrowMock)
    const next = wrapper.find(classes.next).not(classes.arrowMock)
    const mock = wrapper.find(classes.arrowMock)

    expect(prev.length).toEqual(1)
    expect(next.length).toEqual(1)
    expect(mock.length).toEqual(4)

    done()
  })

  it('check month calculation', done => {
    const wrapper = mount(
      applyTheme(
        <Calendar
          visibleMonths={3}
          value={[date, dateTo]}
          initDate={date}
          range
        />
      )
    )

    const values = ['Апрель, 2018', 'Май, 2018', 'Июнь, 2018']

    const classes = getClasses(wrapper)
    const months = wrapper.find(classes.month)

    expect(months.map(month => month.text())).toEqual(values)

    done()
  })

  it('check month calculation with two years', done => {
    const wrapper = mount(
      applyTheme(
        <Calendar visibleMonths={3} initDate={new Date(2018, 0, 15)} range />
      )
    )

    const values = ['Ноябрь, 2017', 'Декабрь, 2017', 'Январь, 2018']

    const classes = getClasses(wrapper)
    const months = wrapper.find(classes.month)

    expect(months.map(month => month.text())).toEqual(values)

    done()
  })

  it('check month calculation with three years', done => {
    const wrapper = mount(
      applyTheme(
        <Calendar visibleMonths={14} initDate={new Date(2018, 0, 15)} range />
      )
    )

    const values = [
      'Декабрь, 2016',
      'Январь, 2017',
      'Февраль, 2017',
      'Март, 2017',
      'Апрель, 2017',
      'Май, 2017',
      'Июнь, 2017',
      'Июль, 2017',
      'Август, 2017',
      'Сентябрь, 2017',
      'Октябрь, 2017',
      'Ноябрь, 2017',
      'Декабрь, 2017',
      'Январь, 2018'
    ]

    const classes = getClasses(wrapper)
    const months = wrapper.find(classes.month)

    expect(months.map(month => month.text())).toEqual(values)

    done()
  })
})
