import merge from 'lodash/merge'
import {fade, darken, lighten} from 'utils/colors'
import colorsConfig from './colors'

/**
 * Создание темы
 */
export function createTheme(config) {
  const { colors } = config
  return merge({
    font: {
      fontFamily: 'Roboto, sans-serif'
    },
    button: {
      sizes: {
        medium: {
          fontSize: 12,
          icon: 12,
          height: 35
        },
        small: {
          fontSize: 11,
          icon: 10,
          height: 45
        }
      },
      borderRadius: 1.2,
      types: {
        primary: {
          outlineOffset: 3,
          colors: {
            default: {
              text: colors.light,
              icon: colors.light,
              loader: colors.light,
              background: colors.primary
            },
            hover: {
              background: darken(colors.primary, 0.1)
            },
            active: {
              background: darken(colors.primary, 0.2)
            },
            disabled: {
              text: fade(colors.light, 0.2),
              icon: fade(colors.light, 0.2)
            },
            focus: {
              outline: colors.primary
            }
          }
        },
        danger: {
          outlineOffset: 3,
          colors: {
            default: {
              text: colors.light,
              icon: colors.light,
              loader: colors.light,
              background: colors.danger
            },
            hover: {
              background: darken(colors.danger, 0.1)
            },
            active: {
              background: darken(colors.danger, 0.2)
            },
            disabled: {
              text: fade(colors.light, 0.2),
              icon: fade(colors.light, 0.2)
            },
            focus: {
              outline: colors.danger
            }
          }
        },
        secondary: {
          colors: {
            default: {
              text: colors.dark,
              icon: colors.primary,
              loader: colors.primary,
              background: colors.controls.grey.background
            },
            hover: {
              text: colors.primary
            },
            active: {
              text: darken(colors.primary, 0.2),
              icon: darken(colors.primary, 0.2)
            },
            disabled: {
              text: fade(colors.dark, 0.1),
              icon: fade(colors.dark, 0.1)
            },
            focus: {
              outline: colors.primary
            }
          }
        },
        outline: {
          colors: {
            default: {
              text: colors.dark,
              icon: colors.primary,
              loader: colors.primary,
              border: colors.controls.grey.default
            },
            hover: {
              text: colors.primary,
              border: colors.primary
            },
            active: {
              text: darken(colors.primary, 0.2),
              icon: darken(colors.primary, 0.2),
              border: darken(colors.primary, 0.2),
              background: colors.controls.grey.background
            },
            disabled: {
              text: fade(colors.controls.text.dark, 0.1),
              icon: fade(colors.controls.text.dark, 0.1),
              border: colors.controls.grey.disabled
            },
            focus: {
              outline: colors.primary
            }
          }
        },
        flat: {
          colors: {
            default: {
              text: colors.dark,
              icon: colors.primary,
              loader: colors.primary
            },
            hover: {
              background: colors.controls.grey.background
            },
            active: {
              background: darken(colors.controls.grey.background, 0.2)
            },
            disabled: {
              text: fade(colors.dark, 0.1),
              icon: fade(colors.dark, 0.1)
            },
            focus: {
              outline: colors.primary
            }
          }
        }
      }
    },
    checkbox: {
      borderRadius: 1,
      colors: {
        default: {
          background: colors.light,
          border: colors.controls.grey.default,
          tick: colors.primary,
          color: colors.dark
        },
        active: {
          background: colors.controls.grey.activeBackground,
          border: colors.primary
        },
        focus: {
          border: colors.primary
        },
        hover: {
          border: colors.primary
        },
        checked: {
          border: colors.primary
        },
        disabled: {
          tick: colors.controls.grey.disabled,
          border: colors.controls.grey.disabled,
          color: colors.controls.grey.disabled
        }
      },
      size: 15,
      tick: {
        margin: 10,
        size: 13
      },
      fontSize: 13
    },
    dropdown: {
      borderRadius: 1,
      animationDuration: 200,
      boxShadow: '1px 2px 7px 0 rgba(123, 129, 133, 0.34)'
    },
    hint: {
      borderRadius: 1,
      animationDuration: 200,
      boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 -2px 6px 0 rgba(0, 0, 0, 0.1)',
      colors: {
        background: colors.light,
        text: colors.dark,
        icon: colors.primary
      },
      fontSize: 13
    },
    iconButton: {
      borderRadius: '50%',
      sizes: {
        medium: {
          size: 40,
          icon: 20
        },
        small: {
          size: 23,
          icon: 11
        }
      }
    },
    field: { // input, select, textarea
      borderRadius: 1,
      icon: {
        colors: {
          default: colors.controls.grey.icon,
          active: colors.primary
        }
      },
      colors: {
        default: {
          border: colors.controls.grey.outline,
          background: colors.light,
          text: colors.dark
        },
        disabled: {
          border: colors.controls.grey.disabled,
          text: colors.controls.grey.disabled,
          background: colors.controls.grey.disabled
        },
        focus: {
          border: colors.primary
        },
        success: {
          border: colors.success
        },
        error: {
          border: colors.error
        },
        warn: {
          border: colors.warn
        }
      },
      sizes: {
        medium: {
          height: 35,
          fontSize: 13,
          icon: 20,
          eyeIcon: 18,
          withIconPadding: 40,
          withIconsPadding: 70,
          iconMargin: 13
        },
        small: {
          height: 45,
          fontSize: 12,
          icon: 20,
          eyeIcon: 18,
          withIconPadding: 40,
          withIconsPadding: 70,
          iconMargin: 13
        }
      },
      animationDuration: 200
    },
    input: {
      padding: '0 13px 2px 13px',
      eyeMargin: 13
    },
    loader: {
      animationDuration: 200,
      color: colors.controls.background.light
    },
    menu: {
      colors: {
        default: {
          text: colors.dark,
          background: colors.light
        },
        hover: {
          background: colors.controls.grey.background
        },
        focus: {
          background: colors.controls.grey.background
        },
        checked: {
          text: colors.primary
        }
      }
    },
    notification: {
      borderRadius: 2,
      boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 -2px 6px 0 rgba(0, 0, 0, 0.1)',
      padding: '20px 25px 20px 20px',
      colors: {
        background: colors.controls.background.light,
        iconBackground: colors.controls.background.lightGrey,
        text: colors.dark,
        close: colors.controls.grey.icon
      },
      actionButton: {
        fontSize: 13,
        colors: {
          default: colors.primary,
          hover: darken(colors.primary, 0.1),
          active: darken(colors.primary, 0.2)
        }
      },
      fontSize: 13,
      titleSize: 14,
      animationDuration: 200
    },
    radio: {
      colors: {
        default: {
          text: colors.dark,
          dot: colors.primary,
          border: colors.controls.grey.outline,
          background: colors.light
        },
        focus: {
          border: lighten(colors.primary, 0.1)
        },
        checked: {
          border: colors.primary
        },
        active: {
          background: colors.controls.grey.activeBackground,
          border: darken(colors.primary, 0.2)
        },
        hover: {
          border: darken(colors.primary, 0.1)
        },
        disabled: {
          dot: colors.controls.grey.disabled,
          text: colors.controls.grey.disabled,
          border: colors.controls.grey.disabled
        }
      },
      radioSize: 15,
      fontSize: 13
    },
    toggle: {
      animationDuration: 200,
      borderRadius: 1,
      colors: {
        default: {
          border: colors.controls.grey.outline
        },
        checked: {
          border: colors.primary,
          text: colors.primary
        },
        hover: {
          border: colors.primary,
          text: colors.primary
        },
        active: {
          background: fade(colors.primary, 0.15),
          border: colors.primary,
          text: colors.primary
        },
        disabled: {
          text: colors.controls.grey.disabled,
          border: colors.controls.grey.disabled
        }
      },
      sizes: {
        medium: {
          fontSize: 13,
          height: 45,
          paddingHr: 25
        },
        small: {
          fontSize: 13,
          height: 35,
          paddingHr: 15
        }
      }
    },
    sideNav: {
      colors: {
        default: {
          text: colors.dark,
          icon: colors.controls.grey.icon
        },
        selected: {
          icon: colors.dark,
          border: colors.primary
        }
      },
      height: 25,
      sideMargin: 17,
      betweenMargin: 20,
      fontSize: 14
    },
    popup: {
      borderRadius: 2,
      boxShadow: '1px 2px 7px 0 rgba(124, 130, 134, 0.2)',
      padding: '20px 30px 30px',
      colors: {
        background: colors.light,
        backdrop: fade(colors.fullDark, 0.6),
        close: colors.controls.grey.icon
      },
      font: {
        size: 13,
        titleSize: 16
      },
      animationDuration: 200
    },
    textarea: {
      sizes: {
        small: {
          padding: '8px 13px',
          height: 75,
          focusPaddingBottom: 7
        },
        medium: {
          padding: 13,
          height: 85,
          focusPaddingBottom: 12
        }
      }
    },
    tooltip: {
      borderRadius: 1,
      animationDuration: 200,
      fontSize: 13,
      colors: {
        background: fade(colors.fullDark, 0.8),
        text: colors.white
      }
    },
    snackbar: {
      borderRadius: 2,
      height: 50,
      padding: '0 20px',
      colors: {
        text: colors.light,
        actionButton: colors.light,
        background: {
          main: fade(colors.fullDark, 0.8),
          primary: fade(colors.primary, 0.9),
          success: fade(colors.success, 0.9),
          danger: fade(colors.danger, 0.9)
        }
      },
      fontSize: 14,
      animationDuration: 200
    },
    spinner: {
      color: colors.primary
    }
  }, config)
}

export default createTheme({colors: colorsConfig})