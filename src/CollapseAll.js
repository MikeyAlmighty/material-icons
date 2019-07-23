import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CollapseAllIcon = ({
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
    <path d='M14,4H4V14H2V4C2,2.9 2.9,2 4,2H14V4M18,6H8C6.9,6 6,6.9 6,8V18H8V8H18V6M22,12V20C22,21.1 21.1,22 20,22H12C10.9,22 10,21.1 10,20V12C10,10.9 10.9,10 12,10H20C21.1,10 22,10.9 22,12M20,15H12V17H20V15Z' />
  </Svg>
)

CollapseAllIcon.displayName = 'CollapseAllIcon'

CollapseAllIcon.defaultProps = {
  size: 24
}

export default CollapseAllIcon