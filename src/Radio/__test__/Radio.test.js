import { RadioButton, RadioButtonGroup} from '../../Radio'
import { ApplyTheme } from '../../theme'
import { mount, getStyles } from '../../utils/test-utils'
import theme from '../../theme/base'
import React from 'react'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('Проверка callback RadioButton на вызов', () => {
  const defaultProps = {
    className: 'my-radio-button',
    value: 1,
    onClick: () => {},
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {}
  }

  beforeEach(() => {
    spyOn(defaultProps, 'onClick').and.callThrough()
    spyOn(defaultProps, 'onBlur').and.callThrough()
    spyOn(defaultProps, 'onChange').and.callThrough()
    spyOn(defaultProps, 'onFocus').and.callThrough()
  })

  it('Проверяем произошел ли вызов функции', () => {
    const wrapper = mount(applyTheme(
      <RadioButtonGroup
        name='group'
        className='my-radio-button-group'>
          <RadioButton
            {...defaultProps}>
            radio
          </RadioButton>
       </RadioButtonGroup>))

    const input = wrapper.find('input')
    input.simulate('click')
    expect(defaultProps.onClick).toHaveBeenCalled()
    input.simulate('blur')
    expect(defaultProps.onBlur).toHaveBeenCalled()
    input.simulate('change')
    expect(defaultProps.onChange).toHaveBeenCalled()
    input.simulate('focus')
    expect(defaultProps.onFocus).toHaveBeenCalled()
  })
})

describe('Проверка callback RadioButton на event.type', () => {
  const defaultProps = {
    className: 'my-radio-button',
    value: 1,
    onClick: () => {},
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {}
  }

  let event
  beforeEach(() => {
    spyOn(defaultProps, 'onClick').and.callFake((e) => { event = e })
    spyOn(defaultProps, 'onBlur').and.callFake((e) => { event = e })
    spyOn(defaultProps, 'onChange').and.callFake((e) => { event = e })
    spyOn(defaultProps, 'onFocus').and.callFake((e) => { event = e })
  })

  it('Проверяем тип события', () => {
    const wrapper = mount(applyTheme(
      <RadioButtonGroup
        name='group'
        className='my-radio-button-group'>
          <RadioButton
            {...defaultProps}>
            radio
          </RadioButton>
       </RadioButtonGroup>))
    const input = wrapper.find('input')
    input.simulate('click')
    expect(event.type).toEqual('click')
    input.simulate('blur')
    expect(event.type).toEqual('blur')
    input.simulate('change')
    expect(event.type).toEqual('change')
    input.simulate('focus')
    expect(event.type).toEqual('focus')
  })
})

describe('Проверка RadioButton.props disabled && value', () => {
  const defaultProps = {
    className: 'my-radio-button',
    onClick: () => {},
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {}
  }

  it('Проверяем value и disabled', () => {
    const wrapper = mount(applyTheme(
      <RadioButtonGroup
        name='group'
        className='my-radio-button-group'>
          <RadioButton
            value = '1'
            {...defaultProps}>
            1
          </RadioButton>
          <RadioButton
            value = '2'
            {...defaultProps}>
            2
          </RadioButton>
          <RadioButton
            value = '3'
            disabled={true}
            {...defaultProps}>
            3
          </RadioButton>
       </RadioButtonGroup>))
    const arr = wrapper.find('input')
    expect(arr.nodes[0].disabled).toEqual(false)
    expect(arr.nodes[1].disabled).toEqual(false)
    expect(arr.nodes[2].disabled).toEqual(true)
    let i = 1
    arr.nodes.forEach((node) => {
      expect(node.value).toEqual(`${i++}`)
    })
  })
})

describe('Проверка callback = onChange на RadioButtonGroup', () => {
  const defaultProps = {
    className: 'my-radio-button',
    onChange: () => {}
  }

  const defaultPropsGroup = {
    name: 'group',
    className: 'my-radio-button-group',
    onChange: () => {}
  }

  let event, newValue
  beforeEach(() => {
    spyOn(defaultPropsGroup, 'onChange').and.callFake((e, value) => { event = e; newValue = value })
  })

  it('Проверяем callback onChange', () => {
    const wrapper = mount(applyTheme(
      <RadioButtonGroup
        {...defaultPropsGroup}
        >
          <RadioButton
            value = '1'
            {...defaultProps}>
            1
          </RadioButton>
       </RadioButtonGroup>))
    const input = wrapper.find('input')
    input.simulate('change')
    expect(event.type).toEqual('change')
    expect(newValue).toEqual('1')
  })
})

describe('<RadioButton /> styles', () => {
  it('Проверяем стили span=radio', () => {
    const defaultProps = {
      className: 'my-radio-button',
      value: 1
    }
    const wrapper = mount(applyTheme(
      <RadioButtonGroup style={{width: '700px'}}>
        <RadioButton
          name='group'
          radioClassName='my-class'
          {...defaultProps}>
          radio
        </RadioButton>
      </RadioButtonGroup>))
    const styles = getStyles(wrapper.find('.my-class'))
    expect(styles['border-bottom-left-radius']).toEqual('50%')
    expect(styles['border-bottom-right-radius']).toEqual('50%')
    expect(styles.height).toEqual(theme.radio.radioSize + 'px')
    expect(styles.width).toEqual(theme.radio.radioSize + 'px')
    expect(styles['border-top-width']).toEqual('1px')
    expect(styles['border-bottom-width']).toEqual('1px')
    expect(styles['border-top-style']).toEqual('solid')
    expect(styles['border-bottom-style']).toEqual('solid')
  })

  it('Проверяем стили RadioButtonGroup, display == block', () => {
    const wrapper = mount(applyTheme(<RadioButtonGroup
                                      className='radio-group'
                                      >
                                    </RadioButtonGroup>))
    const styles = getStyles(wrapper.find('.radio-group'))
    expect(styles.display).toEqual('block')
  })

})