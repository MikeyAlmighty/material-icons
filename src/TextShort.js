import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TextShortIcon = ({
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
    <path d='M4,9H20V11H4V9M4,13H14V15H4V13Z' />
  </Svg>
)

TextShortIcon.displayName = 'TextShortIcon'

TextShortIcon.defaultProps = {
  size: 24
}

export default TextShortIcon