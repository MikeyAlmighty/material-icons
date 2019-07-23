import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlagCheckeredIcon = ({
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
    <path d='M14.4,6H20V16H13L12.6,14H7V21H5V4H14L14.4,6M14,14H16V12H18V10H16V8H14V10L13,8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14,12V14M11,10V8H13V10H11M14,10H16V12H14V10Z' />
  </Svg>
)

FlagCheckeredIcon.displayName = 'FlagCheckeredIcon'

FlagCheckeredIcon.defaultProps = {
  size: 24
}

export default FlagCheckeredIcon