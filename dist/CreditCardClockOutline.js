import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CreditCardClockOutlineIcon = ({
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
    <path d='M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M24,17C24,20.87 20.87,24 17,24C14.21,24 11.8,22.36 10.67,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H20C21.1,4 22,4.9 22,6V12.1C23.24,13.36 24,15.09 24,17M10,17C10,15.04 10.81,13.27 12.1,12H4V18H10.07C10,17.67 10,17.34 10,17M17,12C14.24,12 12,14.24 12,17C12,19.76 14.24,22 17,22C19.76,22 22,19.76 22,17C22,14.24 19.76,12 17,12M20,8V6H4V8H20Z' />
  </Svg>
)

CreditCardClockOutlineIcon.displayName = 'CreditCardClockOutlineIcon'

CreditCardClockOutlineIcon.defaultProps = {
  size: 24
}

export default CreditCardClockOutlineIcon