import React from 'react'
import * as PropTypes from 'prop-types'
import { injectSheet } from '../theme'
import uuid from '../utils/uuid'
import { COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT } from '../constants/context'
import classnames from 'classnames'

@injectSheet(theme => ({
  isHighlighted: {},
  root: {
    height: theme.search.height,
    padding: '0 15px',
    cursor: 'pointer',
    fontSize: theme.suggestItem.fontSize,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '&$isHighlighted': {
      backgroundColor: theme.suggestItem.highlighted.backgroundColor,
      color: theme.search.color
    }
  },
  string: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  removeButton: {
    fontSize: theme.suggestItem.removeButton.fontSize,
    color: theme.suggestItem.removeButton.color,
    paddingLeft: 10
  }
}))

class SuggestItem extends React.Component {
  static propTypes = {
    /**
    * Переопределение стандартных стилей компонента SuggestItem
    */
    style: PropTypes.object,
    /**
    * Дополнительный css-класс компонента
    */
    className: PropTypes.string,
    /**
    * Текст ссылки для удаления
    */
    removeButton: PropTypes.string,
    /**
    * Значение поиского запроса айтема, может быть  любым объектом
    */
    value: PropTypes.any.isRequired
  }

  static defaultProps = {
    removeButton: ''
  }

  static contextTypes = {
    [COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT]: PropTypes.shape({
      /**
       * Функция регистрации SuggestItem (при добавлении этого компонента в DOM)
       */
      registerSuggestItem: PropTypes.func,
      /**
       * Колбек удаления SuggestItem
       */
      onRemoveSuggestItemClick: PropTypes.func,
      /**
       * Колбек клика по SuggestItem
       */
      onSuggestItemClick: PropTypes.func,
      /**
       * Колбек наведения на SuggstItem
       */
      onSuggestItemHover: PropTypes.func,
      /**
       * Функция для подсветки SuggestItem
       */
      setHighlightedId: PropTypes.func
    })
  }

  constructor(props) {
    super(props)
    this.id = uuid()
    this.state = {
      isHighlighted: false
    }
  }

  get ctx() {
    return this.context[COMPLEX_SEARCH_SUGGEST_ITEM_CONTEXT]
  }

  componentDidMount() {
    this.ctx.events.on('highlight', this.onHighlight)
    this.ctx.registerSuggestItem(this.id, this)
  }

  componentWillUnmount() {
    this.ctx.events.removeListener('highlight', this.onHighlight)
    this.ctx.registerSuggestItem(this.id, null)
  }

  onHighlight = (highlightedItemId) => {
    const isHighlighted = highlightedItemId === this.id
    if (this.state.isHighlighted !== isHighlighted)
      this.setState({isHighlighted})
  }

  onItemClick = () => {
    this.ctx.setHighlightedId(this.id)
    this.ctx.onSuggestItemClick(this.props.value)
  }

  onMouseEnter = () => {
    this.ctx.setHighlightedId(this.id)
    this.ctx.onSuggestItemHover(this.props.value)
  }

  onRemoveClick = () => {
    this.ctx.onRemoveSuggestItemClick(this.props.value)
  }

  render() {
    const {
      sheet: { classes: css },
      className,
      removeButton
    } = this.props

    return (
      <div
        data-suggest-item-id={this.id}
        className={classnames(
          css.root,
          className,
          {[css.isHighlighted]: this.state.isHighlighted}
        )}
        onClick={this.onItemClick}
        onMouseEnter={this.onMouseEnter}
      >
        <span className={css.string}>
          {this.props.children}
        </span>
        {removeButton && (
          <span
            className={css.removeButton}
            onClick={this.onRemoveClick}
          >
            {removeButton}
          </span>
        )}
      </div>
    )
  }
}

export default SuggestItem
