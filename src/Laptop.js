import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LaptopIcon = ({
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
    <path d='M4,6H20V16H4M20,18C21.1,18 22,17.1 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16C2,17.1 2.9,18 4,18H0V20H24V18H20Z' />
  </Svg>
)

LaptopIcon.displayName = 'LaptopIcon'

LaptopIcon.defaultProps = {
  size: 24
}

export default LaptopIcon