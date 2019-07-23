import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuDownOutlineIcon = ({
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
    <path d='M18,9V10.5L12,16.5L6,10.5V9H18M12,13.67L14.67,11H9.33L12,13.67Z' />
  </Svg>
)

MenuDownOutlineIcon.displayName = 'MenuDownOutlineIcon'

MenuDownOutlineIcon.defaultProps = {
  size: 24
}

export default MenuDownOutlineIcon