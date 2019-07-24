import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HouzzBoxIcon = ({
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
    <path d='M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M13.5,18.71H18V11.09L9,8.5V5.29H6V18.71H10.5V14.5H13.5V18.71Z' />
  </Svg>
)

HouzzBoxIcon.displayName = 'HouzzBoxIcon'

HouzzBoxIcon.defaultProps = {
  size: 24
}

export default HouzzBoxIcon