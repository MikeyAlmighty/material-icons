import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TieIcon = ({
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
    <path d='M6,2L10,6L7,17L12,22L17,17L14,6L18,2Z' />
  </Svg>
)

TieIcon.displayName = 'TieIcon'

TieIcon.defaultProps = {
  size: 24
}

export default TieIcon