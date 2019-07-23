import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FilterVariantIcon = ({
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
    <path d='M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z' />
  </Svg>
)

FilterVariantIcon.displayName = 'FilterVariantIcon'

FilterVariantIcon.defaultProps = {
  size: 24
}

export default FilterVariantIcon