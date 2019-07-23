import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaPIcon = ({
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
    <path d='M9,7V17H11V13H13C14.1,13 15,12.1 15,11V9C15,7.9 14.1,7 13,7H9M11,9H13V11H11V9Z' />
  </Svg>
)

AlphaPIcon.displayName = 'AlphaPIcon'

AlphaPIcon.defaultProps = {
  size: 24
}

export default AlphaPIcon