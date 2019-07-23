import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FloppyVariantIcon = ({
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
    <path d='M3,3V21H21V3H3M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,15C12.55,15 13,15.45 13,16V19C13,19.55 12.55,20 12,20C11.45,20 11,19.55 11,19V16C11,15.45 11.45,15 12,15Z' />
  </Svg>
)

FloppyVariantIcon.displayName = 'FloppyVariantIcon'

FloppyVariantIcon.defaultProps = {
  size: 24
}

export default FloppyVariantIcon