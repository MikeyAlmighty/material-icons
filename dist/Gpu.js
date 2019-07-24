import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GpuIcon = ({
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
    <path d='M2,7V8.5H3V17H4.5V7C3.7,7 2.8,7 2,7M6,7V7L6,16H7V17H14V16H22V7H6M17.5,9C18.88,9 20,10.12 20,11.5C20,12.88 18.88,14 17.5,14C16.12,14 15,12.88 15,11.5C15,10.12 16.12,9 17.5,9Z' />
  </Svg>
)

GpuIcon.displayName = 'GpuIcon'

GpuIcon.defaultProps = {
  size: 24
}

export default GpuIcon