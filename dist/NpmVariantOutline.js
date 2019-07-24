import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NpmVariantOutlineIcon = ({
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
    <path d='M3,3V21H21V3H3M6,6H18V18H15V9H12V18H6V6Z' />
  </Svg>
)

NpmVariantOutlineIcon.displayName = 'NpmVariantOutlineIcon'

NpmVariantOutlineIcon.defaultProps = {
  size: 24
}

export default NpmVariantOutlineIcon