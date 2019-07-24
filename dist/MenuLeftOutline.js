import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuLeftOutlineIcon = ({
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
    <path d='M15,18H13.5L7.5,12L13.5,6H15V18M10.33,12L13,14.67V9.33L10.33,12Z' />
  </Svg>
)

MenuLeftOutlineIcon.displayName = 'MenuLeftOutlineIcon'

MenuLeftOutlineIcon.defaultProps = {
  size: 24
}

export default MenuLeftOutlineIcon