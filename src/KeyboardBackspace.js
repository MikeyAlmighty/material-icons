import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const KeyboardBackspaceIcon = ({
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
    <path d='M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z' />
  </Svg>
)

KeyboardBackspaceIcon.displayName = 'KeyboardBackspaceIcon'

KeyboardBackspaceIcon.defaultProps = {
  size: 24
}

export default KeyboardBackspaceIcon