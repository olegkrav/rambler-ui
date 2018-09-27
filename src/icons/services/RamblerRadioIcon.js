import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerRadioIcon extends PureComponent {
  static displayName = 'RamblerRadioIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M13.432 11.75c-1.008 0-1.485-.828-1.799-1.376-.203-.353-.369-.624-.499-.624s-.295.271-.498.623c-.315.549-.791 1.377-1.8 1.377s-1.484-.828-1.799-1.377c-.203-.352-.368-.623-.498-.623-.129 0-.294.271-.497.623-.314.549-.79 1.377-1.798 1.377-.899 0-1.327-.665-1.64-1.15-.291-.454-.489-.731-.892-.818a.384.384 0 0 1-.312-.371v-.894c0-.144.122-.266.267-.254 1.286.107 1.853.986 2.198 1.524.133.206.298.463.379.463.129 0 .294-.271.497-.623.315-.549.79-1.377 1.798-1.377 1.009 0 1.484.828 1.799 1.377.203.352.368.623.498.623s.296-.271.499-.624c.314-.548.791-1.376 1.799-1.376 1.009 0 1.485.828 1.8 1.377.203.352.368.623.498.623.131 0 .298-.271.501-.624.315-.548.792-1.376 1.801-1.376.89 0 1.3.654 1.599 1.132.272.433.467.744.951.835.182.033.32.186.32.372v.89a.251.251 0 0 1-.264.254c-1.368-.103-1.933-1.004-2.277-1.554-.099-.158-.247-.394-.318-.43-.142.001-.308.272-.512.625-.315.548-.792 1.376-1.801 1.376"
        />
      </SvgIcon>
    )
  }
}
