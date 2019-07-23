import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EightTrackIcon = ({
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
    <path d='M7,2L5,5V16L6,20C6.27,21.07 6.9,22 8,22H16C17.1,22 18,21.1 18,20L19,16V5L17,2H15V3H13V2H7M7,6H17V16H7V6Z' />
  </Svg>
)

EightTrackIcon.displayName = 'EightTrackIcon'

EightTrackIcon.defaultProps = {
  size: 24
}

export default EightTrackIcon