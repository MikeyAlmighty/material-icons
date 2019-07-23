import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuDownIcon = ({
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
    <path d='M7,10L12,15L17,10H7Z' />
  </Svg>
)

MenuDownIcon.displayName = 'MenuDownIcon'

MenuDownIcon.defaultProps = {
  size: 24
}

export default MenuDownIcon