import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrencyTwdIcon = ({
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
    <path d='M3,11H21V13H15V19H21V21H15C13.9,21 13,20.1 13,19V13H10.35L5.73,21L4,20L8.04,13H3V11M5,3H19V5H5V3Z' />
  </Svg>
)

CurrencyTwdIcon.displayName = 'CurrencyTwdIcon'

CurrencyTwdIcon.defaultProps = {
  size: 24
}

export default CurrencyTwdIcon