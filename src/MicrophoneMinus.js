import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MicrophoneMinusIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M9,2C10.66,2 12,3.34 12,5V11C12,12.66 10.66,14 9,14C7.34,14 6,12.66 6,11V5C6,3.34 7.34,2 9,2M16,11C16,14.5 13.44,17.43 10,17.93V21H8V17.93C4.56,17.43 2,14.5 2,11H4C4,13.76 6.24,16 9,16C11.76,16 14,13.76 14,11H16M15,5H23V7H15V5Z' />
  </Svg>
)

MicrophoneMinusIcon.displayName = 'MicrophoneMinusIcon'

MicrophoneMinusIcon.defaultProps = {
  size: 24
}

export default MicrophoneMinusIcon