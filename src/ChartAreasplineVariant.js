import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChartAreasplineVariantIcon = ({
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
    <path d='M22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L22,21Z' />
  </Svg>
)

ChartAreasplineVariantIcon.displayName = 'ChartAreasplineVariantIcon'

ChartAreasplineVariantIcon.defaultProps = {
  size: 24
}

export default ChartAreasplineVariantIcon