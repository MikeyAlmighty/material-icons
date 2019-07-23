import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LabelVariantOutlineIcon = ({
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
    <path d='M6.5,17H15L18.5,12L15,7H6.5L10,12L6.5,17M15,19H3L7.5,12L3,5H15C15.69,5 16.23,5.3 16.64,5.86L21,12L16.64,18.14C16.23,18.7 15.69,19 15,19Z' />
  </Svg>
)

LabelVariantOutlineIcon.displayName = 'LabelVariantOutlineIcon'

LabelVariantOutlineIcon.defaultProps = {
  size: 24
}

export default LabelVariantOutlineIcon