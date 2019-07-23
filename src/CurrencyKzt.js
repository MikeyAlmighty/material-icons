import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrencyKztIcon = ({
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
    <path d='M5,3H19V5H5V3M5,6H19V8H13V21H11V8H5V6Z' />
  </Svg>
)

CurrencyKztIcon.displayName = 'CurrencyKztIcon'

CurrencyKztIcon.defaultProps = {
  size: 24
}

export default CurrencyKztIcon