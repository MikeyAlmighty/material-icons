import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MinusIcon = ({
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
    <path d='M19,13H5V11H19V13Z' />
  </Svg>
)

MinusIcon.displayName = 'MinusIcon'

MinusIcon.defaultProps = {
  size: 24
}

export default MinusIcon