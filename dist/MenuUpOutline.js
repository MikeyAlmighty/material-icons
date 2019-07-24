import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuUpOutlineIcon = ({
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
    <path d='M18,16V14.5L12,8.5L6,14.5V16H18M12,11.33L14.67,14H9.33L12,11.33Z' />
  </Svg>
)

MenuUpOutlineIcon.displayName = 'MenuUpOutlineIcon'

MenuUpOutlineIcon.defaultProps = {
  size: 24
}

export default MenuUpOutlineIcon