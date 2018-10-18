/**
 * Компонент пагинации
 */
import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'
import {ENTER} from '../constants/keys'
import Tooltip from '../Tooltip'
import Input from '../Input'

const inactiveElement = <span />
const buttonContainer = () => <button type="button" />

@injectSheet(
  theme => ({
    root: {
      extend: isolateMixin,
      display: 'inline-flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      fontFamily: theme.fontFamily,
      userSelect: 'none',
      color: theme.pagination.colors.default.text,
      '&:hover $arrow': {
        opacity: 1
      }
    },
    item: {
      extend: isolateMixin,
      display: 'inline-block',
      flex: 'none',
      height: theme.pagination.size,
      lineHeight: theme.pagination.size + 'px',
      border: 0,
      outline: 'none !important',
      background: 'none',
      fontSize: theme.pagination.fontSize,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      cursor: 'default',
      'button&::-moz-focus-inner': {
        border: 'none !important',
        outline: 'none !important'
      }
    },
    page: {
      composes: '$item',
      minWidth: theme.pagination.size,
      padding: '0 5px',
      borderRadius: theme.pagination.size / 2,
      cursor: 'pointer',
      background: theme.pagination.colors.default.background,
      transitionDuration: theme.tabs.animationDuration,
      transitionProperty: 'color, background-color',
      '&&': {
        color: theme.pagination.colors.default.text,
        fontWeight: 400
      },
      '&$isSelected': {
        color: theme.pagination.colors.selected.text,
        fontWeight: 500,
        backgroundColor: theme.pagination.colors.selected.background
      },
      '&:focus': {
        color: theme.pagination.colors.focus.text
      },
      '&:hover': {
        color: theme.pagination.colors.hover.text
      },
      '&:active': {
        color: theme.pagination.colors.active.text,
        background: theme.pagination.colors.active.background
      },
      '&$isDisabled': {
        color: theme.pagination.colors.disabled.text,
        background: 'none'
      }
    },
    arrow: {
      composes: '$item',
      position: 'relative',
      width: theme.pagination.size,
      cursor: 'pointer',
      overflow: 'hidden',
      paddingLeft: theme.pagination.size,
      opacity: 0,
      '&&': {
        transitionDuration: theme.tabs.animationDuration,
        transitionProperty: 'fill, opacity',
        color: theme.pagination.colors.default.arrow
      },
      '&&:focus': {
        color: theme.pagination.colors.focus.arrow
      },
      '&&:hover': {
        color: theme.pagination.colors.hover.arrow
      },
      '&&:active': {
        color: theme.pagination.colors.active.arrow
      },
      '&$isDisabled': {
        color: theme.pagination.colors.disabled.arrow + '!important'
      },
      '&:before': {
        boxSizing: 'border-box',
        position: 'absolute',
        top: 6,
        left: 13,
        content: '""',
        width: 11,
        height: 11,
        border: 'solid',
        borderWidth: '0 0 2px 2px',
        transform: 'rotate(45deg)',
        transformOrigin: 'left bottom'
      }
    },
    prevArrow: {
      composes: '$arrow',
      marginRight: 7
    },
    nextArrow: {
      composes: '$arrow',
      marginLeft: 7,
      transform: 'scaleX(-1)'
    },
    dots: {
      composes: '$item',
      width: theme.pagination.size
    },
    isDisabled: {
      cursor: 'not-allowed'
    },
    isSelected: {},
    inputWrapper: {
      paddingLeft: 20
    },
    input: {
      width: 76
    },
    label: {
      fontFamily: theme.fontFamily,
      fontSize: theme.pagination.fontSize,
      lineHeight: theme.pagination.size + 'px',
      cursor: 'pointer',
      color: theme.pagination.colors.label.default,
      transitionDuration: theme.tabs.animationDuration,
      transitionProperty: 'color',
      '&:hover, &:focus': {
        color: theme.pagination.colors.label.hover
      }
    }
  }),
  {name: 'Pagination'}
)
export default class Pagination extends Component {
  static propTypes = {
    /**
     * Количество страниц
     */
    pagesCount: PropTypes.number,
    /**
     * Выбранная страница
     */
    currentPage: PropTypes.number,
    /**
     * Дополнительный класс контейнера
     */
    className: PropTypes.string,
    /**
     * CSS-стили корневого элемента
     */
    style: PropTypes.object,
    /**
     * Функция, возвращающая React-элемент, `function (pageNumber: number) {}`
     */
    pageContainer: PropTypes.func,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: number) {}`
     */
    onChange: PropTypes.func,
    /**
     * Input для ручного ввода страниц
     */
    withInput: PropTypes.func,
    /**
     * Дополнительный класс инпута
     */
    inputClassName: PropTypes.string,
    /**
     * Текст кнопки вызова инпута
     */
    labelContent: PropTypes.string,
    /**
     * Дополнительный класс кнопки вызова инпута
     */
    labelClassName: PropTypes.string,
    /**
     * Текст тултипа при неверном вводе страницы
     */
    tooltipContent: PropTypes.string
  }

  static defaultProps = {
    currentPage: 1,
    withInput: false,
    labelContent: 'На страницу',
    tooltipContent: 'Такая страница отсутствует'
  }

  state = {
    pageValue: '',
    showInput: false
  }

  get pageContainer() {
    return this.props.pageContainer || buttonContainer
  }

  get isPageValid() {
    const {pageValue} = this.state
    if (pageValue === '') return true
    const {pagesCount} = this.props
    const page = +pageValue
    return Number.isInteger(page) && page <= pagesCount && page > 0
  }

  handleChange = (event, pageNumber) => {
    const {onChange, currentPage} = this.props
    if (!onChange) return
    event.preventDefault()
    if (!pageNumber || currentPage === pageNumber) return
    onChange(event, pageNumber)
  }

  handlePageChange = event => {
    const pageNumber = +event.currentTarget.textContent
    this.handleChange(event, pageNumber)
  }

  handleInputChange = event => {
    if (!this.isPageValid) return
    this.handleChange(event, +this.state.pageValue)
    this.hideInput()
  }

  onInputChange = (event, value) => {
    event.preventDefault()
    this.setState({
      pageValue: value
    })
  }

  handlePressKey = event => {
    if (event.keyCode === ENTER) this.handleInputChange(event)
  }

  showInput = () => {
    this.setState({
      showInput: true
    })
  }

  hideInput = () => {
    this.setState({
      showInput: false,
      pageValue: ''
    })
  }

  renderPages() {
    const {classes, pagesCount, currentPage, onChange} = this.props

    const dots = '...'
    const edgePages = 3
    const aroundPages = 2

    const leftPageNum = currentPage - aroundPages
    const rightPageNum = currentPage + aroundPages
    const startRange = edgePages
    const endRange = pagesCount - edgePages + 1

    let pages = []
    for (let i = 1; i <= pagesCount; i++)
      if (
        // первая страница
        i === 1 ||
        // последняя страница
        i === pagesCount ||
        // в диапозоне `aroundPages` страниц до и после текущей страницы
        (i >= leftPageNum && i <= rightPageNum) ||
        // в диапозоне `edgePages` страниц с начала списка и при условии нахождения текущей страницы в этом диапозоне
        (i <= startRange && currentPage <= startRange) ||
        // в диапозоне `edgePages` страниц с конца списка и при условии нахождения текущей страницы в этом диапозоне
        (i >= endRange && currentPage >= endRange)
      )
        pages.push(i)

    // Если пропуск более 1 страницы, заполняем строкой `dots`, иначе номером пропущенной страницы
    pages = pages.reduce((accumulator, pageNumber, index) => {
      const prevPageNumber = index > 0 ? pages[index - 1] : null
      if (!prevPageNumber || prevPageNumber + 1 === pageNumber)
        return accumulator.concat(pageNumber)
      if (prevPageNumber + 2 === pageNumber)
        return accumulator.concat(pageNumber - 1, pageNumber)
      return accumulator.concat(dots, pageNumber)
    }, [])

    let dotsCount = 0
    return pages.map(pageNumber => {
      const isPage = pageNumber !== dots
      const isCurrentPage = currentPage === pageNumber
      return cloneElement(
        isPage ? this.pageContainer(pageNumber) : inactiveElement,
        {
          key: isPage ? pageNumber : dotsCount--,
          className: classnames(
            isPage ? classes.page : classes.dots,
            isCurrentPage && classes.isSelected
          ),
          onClick: onChange ? this.handlePageChange : undefined
        },
        pageNumber
      )
    })
  }

  renderArrow(pageNumber, className, isDisabled, key) {
    const {onChange, classes} = this.props
    return cloneElement(
      isDisabled ? inactiveElement : this.pageContainer(pageNumber),
      {
        onClick: onChange && !isDisabled ? this.handlePageChange : undefined,
        className: classnames(className, isDisabled && classes.isDisabled),
        key
      },
      !isDisabled && onChange ? pageNumber : null
    )
  }

  render() {
    const {pageValue, showInput} = this.state
    const {
      className,
      classes,
      currentPage,
      pagesCount,
      pageContainer, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      withInput,
      inputClassName,
      labelClassName,
      labelContent,
      tooltipContent,
      ...other
    } = this.props

    if (!(pagesCount > 1)) return null

    const pages = this.renderPages()
    const prevPageArrow = this.renderArrow(
      currentPage - 1,
      classes.prevArrow,
      currentPage <= 1,
      'prev'
    )
    const nextPageArrow = this.renderArrow(
      currentPage + 1,
      classes.nextArrow,
      currentPage >= pagesCount,
      'next'
    )

    return (
      <div className={classnames(className, classes.root)} {...other}>
        {prevPageArrow}
        {pages}
        {nextPageArrow}
        {withInput && (
          <div className={classes.inputWrapper}>
            {showInput ? (
              <Tooltip content={tooltipContent} isOpened={!this.isPageValid}>
                <Input
                  autoFocus
                  variation="regular"
                  type="text"
                  size="small"
                  className={classnames(inputClassName, classes.input)}
                  status={!this.isPageValid ? 'error' : null}
                  value={pageValue}
                  onBlur={this.handleInputChange}
                  onChange={this.onInputChange}
                  onKeyUp={this.handlePressKey}
                />
              </Tooltip>
            ) : (
              <span
                className={classnames(labelClassName, classes.label)}
                onClick={this.showInput}>
                {labelContent}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
}
