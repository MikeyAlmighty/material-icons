import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TextIcon = ({
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
    <path d='M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z' />
  </Svg>
)

TextIcon.displayName = 'TextIcon'

TextIcon.defaultProps = {
  size: 24
}

export default TextIcon