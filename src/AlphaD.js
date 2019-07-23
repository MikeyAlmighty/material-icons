import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaDIcon = ({
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
    <path d='M9,7V17H13C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H9M11,9H13V15H11V9Z' />
  </Svg>
)

AlphaDIcon.displayName = 'AlphaDIcon'

AlphaDIcon.defaultProps = {
  size: 24
}

export default AlphaDIcon