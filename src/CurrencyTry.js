import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrencyTryIcon = ({
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
    <path d='M19,12C19,16.97 14.97,21 10,21H8V12.77L5,13.87V11.74L8,10.64V8.87L5,9.96V7.84L8,6.74V3H10V6L15,4.2V6.32L10,8.14V9.92L15,8.1V10.23L10,12.05V19C13.87,19 17,15.87 17,12H19Z' />
  </Svg>
)

CurrencyTryIcon.displayName = 'CurrencyTryIcon'

CurrencyTryIcon.defaultProps = {
  size: 24
}

export default CurrencyTryIcon