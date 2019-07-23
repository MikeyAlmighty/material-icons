import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuUpIcon = ({
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
    <path d='M7,15L12,10L17,15H7Z' />
  </Svg>
)

MenuUpIcon.displayName = 'MenuUpIcon'

MenuUpIcon.defaultProps = {
  size: 24
}

export default MenuUpIcon