import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HouzzIcon = ({
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
    <path d='M14,20.95H20V10.78L8,7.34V3.05H4V20.95H10V15.31H14V20.95Z' />
  </Svg>
)

HouzzIcon.displayName = 'HouzzIcon'

HouzzIcon.defaultProps = {
  size: 24
}

export default HouzzIcon