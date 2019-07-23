import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NpmVariantIcon = ({
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
    <path d='M20,4H4V20H12V8H16V20H20V4' />
  </Svg>
)

NpmVariantIcon.displayName = 'NpmVariantIcon'

NpmVariantIcon.defaultProps = {
  size: 24
}

export default NpmVariantIcon