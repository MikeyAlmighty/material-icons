import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CardBulletedOffOutlineIcon = ({
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
    <path d='M20.59,20.87L19.17,22.29L16.88,20H4C2.9,20 2,19.1 2,18V6C2,5.74 2.05,5.5 2.14,5.26L1.17,4.29L2.59,2.87L3.73,4L20.59,20.87V20.87M6.54,4H20C21.1,4 22,4.9 22,6V18C22,18.41 21.87,18.8 21.66,19.12L20,17.46V6H8.54L6.54,4M4,18H14.88L11.88,15H10V13.12L7.88,11H6V9.12L4,7.12V18M18,15H17.54L15.54,13H18V15M18,11H13.54L11.54,9H18V11Z' />
  </Svg>
)

CardBulletedOffOutlineIcon.displayName = 'CardBulletedOffOutlineIcon'

CardBulletedOffOutlineIcon.defaultProps = {
  size: 24
}

export default CardBulletedOffOutlineIcon