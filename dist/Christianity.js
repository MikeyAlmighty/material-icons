import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChristianityIcon = ({
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
    <path d='M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z' />
  </Svg>
)

ChristianityIcon.displayName = 'ChristianityIcon'

ChristianityIcon.defaultProps = {
  size: 24
}

export default ChristianityIcon