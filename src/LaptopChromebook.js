import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LaptopChromebookIcon = ({
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
    <path d='M20,15H4V5H20M14,18H10V17H14M22,18V3H2V18H0V20H24V18H22Z' />
  </Svg>
)

LaptopChromebookIcon.displayName = 'LaptopChromebookIcon'

LaptopChromebookIcon.defaultProps = {
  size: 24
}

export default LaptopChromebookIcon