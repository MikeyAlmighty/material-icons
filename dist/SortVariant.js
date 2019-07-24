import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SortVariantIcon = ({
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
    <path d='M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z' />
  </Svg>
)

SortVariantIcon.displayName = 'SortVariantIcon'

SortVariantIcon.defaultProps = {
  size: 24
}

export default SortVariantIcon