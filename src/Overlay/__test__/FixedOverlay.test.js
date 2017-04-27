import FixedOverlay from '../FixedOverlay'
import React, { Component, PropTypes } from 'react'
import { withTheme, mount, getWrapperNode, getNodeStyles } from '../../utils/test-utils'

class Content extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    pointX: PropTypes.oneOf(['left', 'right', 'center']),
    pointY: PropTypes.oneOf(['top', 'bottom', 'center']),
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    anchorWidth: PropTypes.number,
    anchorHeight: PropTypes.number
  }

  componentDidUpdate(prevProps) {
    if (this.props.isVisible !== prevProps.isVisible)
      if (this.props.isVisible)
        this.props.onBecomeVisible()
      else
        this.props.onBecomeInvisible()

  }

  render() {
    return (
      <div
        style={{padding: '15px', background: '#ddd'}}
        className="content-body">
        Content
      </div>
    )
  }
}

function Anchor({style = {}}) {
  return <div className="anchor" style={{border: '1px solid black', padding: '10px', display: 'inline-block', ...style}}>anchor</div>
}

describe('<FixedOverlay />', () => {
  let callbacks, whenContentShow, whenContentHide, wrapper, wrapperNode, wrapperNodeRect, contentWrapperNode

  const mountWrapper = (props, anchorProps = {}) => {
    wrapper = mount(
      withTheme(
        <FixedOverlay
          isShown={false}
          anchor={<Anchor {...anchorProps} />}
          content={<Content />}
          onContentShow={callbacks.onContentShow}
          onContentHide={callbacks.onContentHide}
          contentWrapperRef={callbacks.contentWrapperRef}
          {...props}
        />
      )
    )
    wrapperNode = getWrapperNode(wrapper)
    wrapperNodeRect = wrapperNode.getBoundingClientRect()
  }

  beforeEach(() => {
    callbacks = {}
    whenContentShow = new Promise((resolve) => {
      callbacks.onContentShow = resolve
    })
    whenContentHide = new Promise((resolve) => {
      callbacks.onContentHide = resolve
    })
    callbacks.contentWrapperRef = (ref) => {
      contentWrapperNode = ref
    }
    spyOn(callbacks, 'onContentShow').and.callThrough()
    spyOn(callbacks, 'onContentHide').and.callThrough()
    spyOn(callbacks, 'contentWrapperRef').and.callThrough()
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('show/hide', async (done) => {
    mountWrapper({
      anchorPointX: 'right',
      anchorPointY: 'center',
      contentPointX: 'left',
      contentPointY: 'center'
    })
    await new Promise((resolve) => { wrapper.setProps({isShown: true}, resolve) })
    expect(callbacks.onContentShow).not.toHaveBeenCalled()
    expect(callbacks.onContentHide).not.toHaveBeenCalled()
    await whenContentShow
    const contentWrapperNodeStyles = getNodeStyles(contentWrapperNode)
    const contentBodyNode = contentWrapperNode.querySelector('.content-body')
    const contentBodyStyles = getNodeStyles(contentBodyNode)
    expect(callbacks.onContentShow).toHaveBeenCalledTimes(1)
    expect(callbacks.onContentHide).not.toHaveBeenCalled()
    expect(contentBodyStyles.opacity).toBe('1')
    expect(document.body.contains(contentBodyNode)).toBe(true)
    expect(contentWrapperNodeStyles.display).toBe('block')
    expect(contentWrapperNodeStyles.position).toBe('absolute')
    await new Promise((resolve) => { wrapper.setProps({isShown: false}, resolve) })
    await whenContentHide
    expect(callbacks.onContentHide).toHaveBeenCalledTimes(1)
    expect(contentWrapperNode).toBe(null)
    expect(document.body.contains(contentBodyNode)).toBe(false)
    done()
  })


  it('anchor: right/center, content: left/center', async (done) => {
    mountWrapper({
      anchorPointX: 'right',
      anchorPointY: 'center',
      contentPointX: 'left',
      contentPointY: 'center'
    })
    await new Promise((resolve) => { wrapper.setProps({isShown: true}, resolve) })
    await whenContentShow
    expect(parseInt(contentWrapperNode.style.left)).toBe(Math.round(wrapperNodeRect.right))
    expect(parseInt(contentWrapperNode.style.top))
      .toBe(Math.round(wrapperNodeRect.bottom - wrapperNodeRect.height / 2 - contentWrapperNode.offsetHeight / 2))
    done()
  })

  it('anchor: right/center, content: left/center, autoPositionX=true', async (done) => {
    mountWrapper({
      anchorPointX: 'right',
      anchorPointY: 'center',
      contentPointX: 'left',
      contentPointY: 'center',
      autoPositionX: true
    }, {
      style: {
        position: 'fixed',
        right: 0,
        top: 0
      }
    })
    await new Promise((resolve) => { wrapper.setProps({isShown: true}, resolve) })
    await whenContentShow
    expect(parseInt(contentWrapperNode.style.left)).toBe(Math.round(wrapperNodeRect.left - contentWrapperNode.offsetWidth))
    expect(parseInt(contentWrapperNode.style.top))
      .toBe(Math.round(wrapperNodeRect.bottom - wrapperNodeRect.height / 2 - contentWrapperNode.offsetHeight / 2))
    done()
  })

  it('anchor: right/center, content: left/center, autoPositionY=true', async (done) => {
    mountWrapper({
      anchorPointX: 'left',
      anchorPointY: 'center',
      contentPointX: 'right',
      contentPointY: 'center',
      autoPositionY: true
    }, {
      style: {
        position: 'fixed',
        right: 0,
        top: 0
      }
    })
    await new Promise((resolve) => { wrapper.setProps({isShown: true}, resolve) })
    await whenContentShow
    expect(parseInt(contentWrapperNode.style.left)).toBe(Math.round(wrapperNodeRect.left - contentWrapperNode.offsetWidth))
    expect(parseInt(contentWrapperNode.style.top)).toBe(wrapperNodeRect.top)
    done()
  })

  it('anchor: center/bottom, content: center/top, autoPositionX=true', async (done) => {
    mountWrapper({
      anchorPointX: 'center',
      anchorPointY: 'bottom',
      contentPointX: 'center',
      contentPointY: 'top',
      autoPositionX: true
    }, {
      style: {
        position: 'fixed',
        right: 0,
        top: 0
      }
    })
    await new Promise((resolve) => { wrapper.setProps({isShown: true}, resolve) })
    await whenContentShow
    expect(parseInt(contentWrapperNode.style.left)).toBe(Math.round(wrapperNodeRect.right - contentWrapperNode.offsetWidth))
    expect(parseInt(contentWrapperNode.style.top)).toBe(Math.round(wrapperNodeRect.bottom))
    done()
  })

})

// TODO покрыть тестыми mutation-observer