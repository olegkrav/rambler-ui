import React, {PureComponent, isValidElement, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {ENTER} from '../constants/keys'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'
import EventEmitter from 'eventemitter3'
import uuid from '../utils/uuid'
import {MENU_ITEM_CONTEXT} from '../constants/context'

@injectSheet(
  theme => ({
    root: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingLeft: theme.menu.padding,
      paddingRight: theme.menu.padding,
      outline: 0,
      fontSize: theme.menu.fontSize,
      lineHeight: theme.menu.lineHeight + 'px'
    },
    ...['medium', 'small'].reduce(
      (result, size) => ({
        ...result,
        [size]: {
          minHeight: theme.menu.sizes[size].height,
          paddingTop:
            (theme.menu.sizes[size].height - theme.menu.lineHeight) / 2,
          paddingBottom:
            (theme.menu.sizes[size].height - theme.menu.lineHeight) / 2
        }
      }),
      {}
    ),
    isEnabled: {
      color: theme.menu.colors.default.text,
      backgroundColor: theme.menu.colors.default.background,
      cursor: 'pointer',
      '&:hover': {
        color: theme.menu.colors.hover.text,
        backgroundColor: theme.menu.colors.hover.background
      },
      '&:focus': {
        color: theme.menu.colors.focus.text,
        background: theme.menu.colors.focus.background
      },
      '&:active': {
        color: theme.menu.colors.active.text,
        background: theme.menu.colors.active.background
      }
    },
    isSelected: {
      color: theme.menu.colors.selected.text
    },
    isDisabled: {
      color: theme.menu.colors.disabled.text,
      background: theme.menu.colors.disabled.background,
      cursor: 'not-allowed'
    }
  }),
  {name: 'MenuItem'}
)
class MenuItem extends PureComponent {
  static propTypes = {
    /**
     * Дополнительный CSS-класс
     */
    className: PropTypes.string,
    /**
     * Значение опции, по-умолчанию считается, что это примитив
     */
    value: PropTypes.any,
    /**
     * Контент опции
     */
    children: PropTypes.node.isRequired,
    /**
     * Элемент, который содержит контент, например `<Link />` в случае с `react-router`.
     * Если используется `<NavLink />` с `activeClassName`,
     * нужно в `container` передавать фабрику, которая получает `activeClassName` в аргументах
     */
    container: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  }

  static contextTypes = {
    [MENU_ITEM_CONTEXT]: PropTypes.shape({
      /**
       * Проверка, выбрано ли значение (args: value)
       */
      isValueSelected: PropTypes.func,
      /**
       * Проверка, в фокусе ли значение (args: key)
       */
      isItemFocused: PropTypes.func,
      /**
       * Проверка, не активно ли меню
       */
      isMenuDisabled: PropTypes.func,
      /**
       * Получение размера меню
       */
      getMenuSize: PropTypes.func,
      /**
       * Получение MenuItem node ref (args: key)
       */
      getItemRef: PropTypes.func,
      /**
       * Шина событий
       * onPropsChange - изменение значений props в Menu, влияющих на отображение опций
       * onItemSelect - клик по MenuItem (args: value)
       * onItemFocus - фокус на MenuItem (args: id)
       * onItemMount - добавление и обновление MenuItem (args: id, componentInstanseRef)
       * onItemUnmount - удаление MenuItem (args: id)
       */
      events: PropTypes.instanceOf(EventEmitter)
    })
  }

  id = uuid()

  get ctx() {
    return this.context[MENU_ITEM_CONTEXT]
  }

  get item() {
    return this.ctx.getItemRef(this.id)
  }

  componentDidMount() {
    this.ctx.events.on('onPropsChange', this.handlePropsChange)
    this.ctx.events.emit('onItemMount', this.id, this)
    if (this.ctx.isItemFocused(this.id)) this.item.focus()
  }

  componentDidUpdate() {
    if (this.ctx.isItemFocused(this.id)) this.item.focus()
  }

  componentWillUnmount() {
    this.ctx.events.removeListener('onPropsChange', this.handlePropsChange)
    this.ctx.events.emit('onItemUnmount', this.id)
  }

  handlePropsChange = () => {
    const {props, ctx} = this
    if (
      (props.hasOwnProperty('value') &&
        ctx.isValueSelected(props.value) !== this.isSelected) ||
      ctx.isItemFocused(this.id) !== this.isFocused ||
      ctx.isMenuDisabled() !== this.disabled ||
      ctx.getMenuSize() !== this.size
    )
      this.forceUpdate()
  }

  handleFocus = () => {
    this.ctx.events.emit('onItemFocus', this.id)
  }

  handleSelect = () => {
    const {props} = this
    if (props.hasOwnProperty('value'))
      this.ctx.events.emit('onItemSelect', props.value)
  }

  handlePressKey = event => {
    if (event.keyCode === ENTER) {
      event.stopPropagation()
      this.item.focus()
      this.handleSelect()
    }
  }

  render() {
    const {
      container,
      className,
      value,
      classes,
      children,
      theme, // eslint-disable-line no-unused-vars
      ...other
    } = this.props
    this.isSelected =
      this.props.hasOwnProperty('value') && this.ctx.isValueSelected(value)
    this.isFocused = this.ctx.isItemFocused(this.id)
    this.disabled = this.ctx.isMenuDisabled()
    this.size = this.ctx.getMenuSize()

    let element
    if (container && isValidElement(container)) element = container
    else if (typeof container === 'function')
      element = container({activeClassName: classes.isSelected})

    const props = {
      ...other,
      className: classnames(
        className,
        classes.root,
        this.size && classes[this.size],
        this.disabled ? classes.isDisabled : classes.isEnabled,
        this.isSelected && classes.isSelected
      ),
      tabIndex: this.disabled ? null : 0,
      onFocus: this.disabled ? null : this.handleFocus,
      onClick: this.disabled ? null : this.handleSelect,
      onKeyDown: this.disabled ? null : this.handlePressKey,
      'data-menu-item-id': this.id
    }

    return element ? (
      cloneElement(element, props, children)
    ) : (
      <div {...props}>{children}</div>
    )
  }
}

MenuItem.displayName = 'ruiMenuItem'

export default MenuItem
