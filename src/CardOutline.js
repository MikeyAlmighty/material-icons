import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CardOutlineIcon = ({
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
    <path d='M20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20M4,6V18H20V6H4Z' />
  </Svg>
)

CardOutlineIcon.displayName = 'CardOutlineIcon'

CardOutlineIcon.defaultProps = {
  size: 24
}

export default CardOutlineIcon