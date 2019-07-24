import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrangeSendBackwardIcon = ({
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
    <path d='M2,2H16V16H2V2M22,8V22H8V18H18V8H22M4,4V14H14V4H4Z' />
  </Svg>
)

ArrangeSendBackwardIcon.displayName = 'ArrangeSendBackwardIcon'

ArrangeSendBackwardIcon.defaultProps = {
  size: 24
}

export default ArrangeSendBackwardIcon