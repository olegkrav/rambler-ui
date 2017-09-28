import React, { Component } from 'react'
import provideRenderToLayer from '../hoc/provide-render-to-layer'

export default function provideSnackbar(Target) {

  @provideRenderToLayer
  class ProvideSnackbar extends Component {

    openSnackbar = (element) => {
      const snackbar = {}

      const close = () => {
        this.props.unrenderAtLayer(snackbar.element)
      }

      snackbar.element = this.props.renderToLayer(element, {
        onRequestClose: close
      })

      snackbar.close = close
      return snackbar
    }

    closeSnackbar = (snackbar) => {
      snackbar.close()
    }

    render() {
      return (
        <Target
          {...this.props}
          openSnackbar={this.openSnackbar}
          closeSnackbar={this.closeSnackbar} />
      )
    }

  }

  return ProvideSnackbar

}
