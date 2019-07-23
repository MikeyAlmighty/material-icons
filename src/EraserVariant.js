import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EraserVariantIcon = ({
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
    <path d='M15.14,3C14.63,3 14.12,3.2 13.73,3.59L2.59,14.73C1.81,15.5 1.81,16.77 2.59,17.56L5.03,20H12.69L21.41,11.27C22.2,10.5 22.2,9.23 21.41,8.44L16.56,3.59C16.17,3.2 15.65,3 15.14,3M17,18L15,20H22V18' />
  </Svg>
)

EraserVariantIcon.displayName = 'EraserVariantIcon'

EraserVariantIcon.defaultProps = {
  size: 24
}

export default EraserVariantIcon