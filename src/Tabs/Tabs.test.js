import React from 'react'
import {Tabs, TabsItem} from '../Tabs'
import {ApplyTheme} from '../theme'
import {mount, getStyles, getWrapperNode} from '../utils/test-utils'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'

const applyTheme = children => <ApplyTheme>{children}</ApplyTheme>

const transparentColor = 'rgba(0, 0, 0, 0)'

describe('<Tabs />', () => {
  const tabsProps = {
    id: 'tabsId',
    className: 'tabs',
    onChange: () => {}
  }
  const linkProps = {
    id: 'link',
    children: 'tab1',
    href: '#',
    title: 'Title1'
  }
  const buttonProps = {
    id: 'button',
    children: 'tab2',
    title: 'Title2'
  }
  const Container = ({activeClassName, ...props}) => (
    <div data-test={activeClassName} {...props} />
  )
  const containerProps = {
    id: 'container',
    children: 'tab3',
    container: <Container data-own="own" />,
    title: 'Title3'
  }
  const funcProps = {
    id: 'funciton',
    children: 'tab4',
    container: ({activeClassName}) => (
      <Container data-own="own" activeClassName={activeClassName} />
    ),
    title: 'Title4'
  }

  it('Tabs content, attributes and item custom className', () => {
    const className = 'customClassName'
    const wrapper = mount(
      applyTheme(
        <Tabs {...tabsProps}>
          <TabsItem {...linkProps} className={className} />
          <TabsItem {...buttonProps} />
          <TabsItem {...containerProps} />
          <TabsItem {...funcProps} />
        </Tabs>
      )
    )

    const tabs = getWrapperNode(wrapper)
    const link = getWrapperNode(wrapper.find('#' + linkProps.id).first())
    const button = getWrapperNode(wrapper.find('#' + buttonProps.id).first())
    const container = getWrapperNode(
      wrapper.find('#' + containerProps.id).first()
    )
    const func = getWrapperNode(wrapper.find('#' + funcProps.id).first())

    expect(tabs.classList.contains(tabsProps.className)).toEqual(true)
    expect(tabs.getAttribute('id')).toEqual(tabsProps.id)
    expect(tabs.children.length).toEqual(4)
    expect(tabs.children[0]).toEqual(link)
    expect(tabs.children[1]).toEqual(button)
    expect(tabs.children[2]).toEqual(container)
    expect(tabs.children[3]).toEqual(func)
    expect(link.classList.contains(className)).toBeTruthy()
  })

  it('TabsItem content, element type and attributes', () => {
    const wrapper = mount(
      applyTheme(
        <div>
          <TabsItem {...linkProps} className="test" />
          <TabsItem {...buttonProps} size="small" />
          <TabsItem {...containerProps} size="medium" />
          <TabsItem {...funcProps} />
        </div>
      )
    )

    const link = getWrapperNode(wrapper.find('#' + linkProps.id).first())
    const button = getWrapperNode(wrapper.find('#' + buttonProps.id).first())
    const container = getWrapperNode(
      wrapper.find('#' + containerProps.id).first()
    )
    const func = getWrapperNode(wrapper.find('#' + funcProps.id).first())

    expect(link.tagName.toUpperCase()).toEqual('A')
    expect(link.classList.contains('test')).toEqual(true)
    expect(link.getAttribute('href')).toEqual(linkProps.href)
    expect(link.getAttribute('aria-disabled')).toEqual('false')
    expect(link.className.includes('size-small')).toEqual(true)
    expect(link.className.includes('isEnabled')).toEqual(true)
    expect(link.innerHTML).toEqual(linkProps.children)

    expect(button.tagName.toUpperCase()).toEqual('BUTTON')
    expect(button.disabled).toEqual(false)
    expect(link.className.includes('size-small')).toEqual(true)
    expect(button.innerHTML).toEqual(buttonProps.children)

    expect(container.tagName.toUpperCase()).toEqual('DIV')
    expect(container.getAttribute('title')).toEqual(containerProps.title)
    expect(container.getAttribute('data-own')).toEqual('own')
    expect(container.getAttribute('data-test')).toEqual(null)
    expect(container.getAttribute('aria-disabled')).toEqual('false')
    expect(container.className.includes('size-medium')).toEqual(true)
    expect(container.innerHTML).toEqual(containerProps.children)

    expect(func.tagName.toUpperCase()).toEqual('DIV')
    expect(func.getAttribute('title')).toEqual(funcProps.title)
    expect(func.getAttribute('data-own')).toEqual('own')
    expect(func.getAttribute('data-test').includes('isSelected')).toEqual(true)
    expect(func.getAttribute('aria-disabled')).toEqual('false')
    expect(func.innerHTML).toEqual(funcProps.children)
  })

  it('selected TabsItem attributes', () => {
    const wrapper = mount(
      applyTheme(
        <Tabs value="first">
          <TabsItem {...linkProps} value="first" />
          <TabsItem {...buttonProps} value="first" />
          <TabsItem {...containerProps} value="first" />
          <TabsItem {...funcProps} value="first" />
          <TabsItem id="notSelected" value="second" />
        </Tabs>
      )
    )

    const link = getWrapperNode(wrapper.find('#' + linkProps.id).first())
    const button = getWrapperNode(wrapper.find('#' + buttonProps.id).first())
    const container = getWrapperNode(
      wrapper.find('#' + containerProps.id).first()
    )
    const func = getWrapperNode(wrapper.find('#' + funcProps.id).first())
    const notSelected = getWrapperNode(wrapper.find('#notSelected').first())

    expect(link.className.includes('size-small')).toEqual(true)
    expect(link.className.includes('isSelected')).toEqual(true)
    expect(button.className.includes('isSelected')).toEqual(true)
    expect(container.className.includes('isSelected')).toEqual(true)
    expect(func.className.includes('isSelected')).toEqual(true)
    expect(notSelected.className.includes('isSelected')).toEqual(false)
  })

  it('disabled Tabs and TabsItem attributes', () => {
    const wrapper = mount(
      applyTheme(
        <Tabs disabled size="medium">
          <TabsItem {...linkProps} />
          <TabsItem {...buttonProps} />
          <TabsItem {...containerProps} />
          <TabsItem {...funcProps} />
        </Tabs>
      )
    )

    const tabs = getWrapperNode(wrapper)
    const link = getWrapperNode(wrapper.find('#' + linkProps.id).first())
    const button = getWrapperNode(wrapper.find('#' + buttonProps.id).first())
    const container = getWrapperNode(
      wrapper.find('#' + containerProps.id).first()
    )
    const func = getWrapperNode(wrapper.find('#' + funcProps.id).first())

    expect(tabs.className.includes('isDisabled')).toEqual(true)

    expect(link.className.includes('size-medium')).toEqual(true)
    expect(link.className.includes('isDisabled')).toEqual(true)
    expect(link.getAttribute('aria-disabled')).toEqual('true')
    expect(link.getAttribute('tabindex')).toEqual('-1')

    expect(button.className.includes('isDisabled')).toEqual(true)
    expect(button.disabled).toEqual(true)

    expect(container.className.includes('isDisabled')).toEqual(true)
    expect(container.getAttribute('aria-disabled')).toEqual('true')
    expect(container.getAttribute('tabindex')).toEqual('-1')

    expect(func.className.includes('isDisabled')).toEqual(true)
    expect(func.getAttribute('aria-disabled')).toEqual('true')
    expect(func.getAttribute('tabindex')).toEqual('-1')
  })

  it('TabsItem onPress handler', () => {
    let event, value
    const props = {
      value: 'test',
      onPress: (e, val) => {
        event = e
        value = val
      }
    }

    const wrapper = mount(applyTheme(<TabsItem {...props} />))

    wrapper.simulate('click')
    expect(event.type).toEqual('click')
    expect(value).toEqual(props.value)
  })

  it('Tabs onChange handler', () => {
    let event, value
    const props = {
      value: linkProps.id,
      onChange: (e, val) => {
        event = e
        value = val
      }
    }
    const wrapper = mount(
      applyTheme(
        <Tabs {...props}>
          <TabsItem {...linkProps} value={linkProps.id} />
          <TabsItem {...buttonProps} value={buttonProps.id} />
          <TabsItem {...containerProps} value={containerProps.id} />
          <TabsItem {...funcProps} value={funcProps.id} />
        </Tabs>
      )
    )
    const linkEl = getWrapperNode(wrapper.find('#' + linkProps.id).first())
    const button = wrapper.find('#' + buttonProps.id).first()
    const buttonEl = getWrapperNode(button)
    const container = wrapper.find('#' + containerProps.id).first()
    const containerEl = getWrapperNode(container)
    const func = wrapper.find('#' + funcProps.id).first()
    const funcEl = getWrapperNode(func)

    expect(linkEl.className.includes('isSelected')).toEqual(true)
    expect(buttonEl.className.includes('isSelected')).toEqual(false)
    expect(containerEl.className.includes('isSelected')).toEqual(false)
    expect(funcEl.className.includes('isSelected')).toEqual(false)
    button.simulate('click')
    expect(event.type).toEqual('click')
    expect(value).toEqual(buttonProps.id)
    expect(linkEl.className.includes('isSelected')).toEqual(false)
    expect(buttonEl.className.includes('isSelected')).toEqual(true)
    expect(containerEl.className.includes('isSelected')).toEqual(false)
    expect(funcEl.className.includes('isSelected')).toEqual(false)
    container.simulate('click')
    expect(linkEl.className.includes('isSelected')).toEqual(false)
    expect(buttonEl.className.includes('isSelected')).toEqual(false)
    expect(containerEl.className.includes('isSelected')).toEqual(true)
    expect(funcEl.className.includes('isSelected')).toEqual(false)
    func.simulate('click')
    expect(linkEl.className.includes('isSelected')).toEqual(false)
    expect(buttonEl.className.includes('isSelected')).toEqual(false)
    expect(containerEl.className.includes('isSelected')).toEqual(false)
    expect(funcEl.className.includes('isSelected')).toEqual(true)
  })

  it('TabsItem styles', () => {
    const wrapper = mount(
      applyTheme(<TabsItem {...linkProps} className="test" />)
    )

    const link = getStyles(wrapper)
    expect(link['border-bottom-width']).toEqual(theme.tabs.borderWidth + 'px')
    expect(link['border-bottom-style']).toEqual('solid')
    expect(link['border-bottom-color']).toEqual(transparentColor)
    expect(nc(link.color)).toEqual(nc(theme.tabs.colors.default.text))
  })

  it('selected TabsItem styles', () => {
    const wrapper = mount(applyTheme(<TabsItem {...buttonProps} isSelected />))

    const button = getStyles(wrapper)
    expect(nc(button.color)).toEqual(nc(theme.tabs.colors.selected.text))
    expect(nc(button['border-bottom-color'])).toEqual(
      nc(theme.tabs.colors.selected.text)
    )
  })

  it('disabled TabsItem styles', () => {
    const wrapper = mount(applyTheme(<TabsItem {...containerProps} disabled />))

    const container = getStyles(wrapper)
    expect(nc(container.color)).toEqual(nc(theme.tabs.colors.disabled.text))
    expect(container['border-bottom-color']).toEqual(transparentColor)
  })

  it('selected disabled TabsItem styles', () => {
    const wrapper = mount(
      applyTheme(<TabsItem {...linkProps} disabled isSelected />)
    )

    const link = getStyles(wrapper)
    expect(nc(link.color)).toEqual(nc(theme.tabs.colors.disabled.text))
    expect(nc(link['border-bottom-color'])).toEqual(
      nc(theme.tabs.colors.disabledSelected.border)
    )
  })

  it('Tabs styles', () => {
    const wrapper = mount(
      applyTheme(
        <Tabs value="selected">
          <TabsItem {...linkProps} value="selected" />
          <TabsItem {...buttonProps} />
          <TabsItem {...containerProps} />
          <TabsItem {...funcProps} />
        </Tabs>
      )
    )

    const tabs = getStyles(wrapper)
    const link = getStyles(wrapper.find('#' + linkProps.id).first())
    const button = getStyles(wrapper.find('#' + buttonProps.id).first())
    const container = getStyles(wrapper.find('#' + containerProps.id).first())
    const func = getStyles(wrapper.find('#' + funcProps.id).first())

    expect(tabs['padding-left']).toEqual(theme.tabs.sidePadding + 'px')
    expect(tabs['padding-right']).toEqual(theme.tabs.sidePadding + 'px')
    expect(tabs.display.includes('inline-flex')).toEqual(true)

    expect(link['margin-left']).toEqual(0 + 'px')
    expect(button['margin-left']).toEqual(theme.tabs.betweenMargin + 'px')
    expect(container['margin-left']).toEqual(theme.tabs.betweenMargin + 'px')
    expect(func['margin-left']).toEqual(theme.tabs.betweenMargin + 'px')
    expect(link['margin-right']).toEqual(0 + 'px')
    expect(button['margin-right']).toEqual(0 + 'px')
    expect(container['margin-right']).toEqual(0 + 'px')
    expect(func['margin-right']).toEqual(0 + 'px')
  })
})
