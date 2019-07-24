import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrencyEthIcon = ({
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
    <path d='M6,5H18V7H6M7,11H17V13H7M5.5,17H18.5V19H5.5' />
  </Svg>
)

CurrencyEthIcon.displayName = 'CurrencyEthIcon'

CurrencyEthIcon.defaultProps = {
  size: 24
}

export default CurrencyEthIcon