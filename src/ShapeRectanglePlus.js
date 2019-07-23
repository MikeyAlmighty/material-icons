import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ShapeRectanglePlusIcon = ({
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
    <path d='M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z' />
  </Svg>
)

ShapeRectanglePlusIcon.displayName = 'ShapeRectanglePlusIcon'

ShapeRectanglePlusIcon.defaultProps = {
  size: 24
}

export default ShapeRectanglePlusIcon