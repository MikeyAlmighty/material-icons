import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrencyChfIcon = ({
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
    <path d='M7,3H18V5H9V11H17V13H9V16H11V18H9V21H7V18H5V16H7V3Z' />
  </Svg>
)

CurrencyChfIcon.displayName = 'CurrencyChfIcon'

CurrencyChfIcon.defaultProps = {
  size: 24
}

export default CurrencyChfIcon