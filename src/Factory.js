import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FactoryIcon = ({
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
    <path d='M4,18V20H8V18H4M4,14V16H14V14H4M10,18V20H14V18H10M16,14V16H20V14H16M16,18V20H20V18H16M2,22V8L7,12V8L12,12V8L17,12L18,2H21L22,12V22H2Z' />
  </Svg>
)

FactoryIcon.displayName = 'FactoryIcon'

FactoryIcon.defaultProps = {
  size: 24
}

export default FactoryIcon