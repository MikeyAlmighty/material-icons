import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuRightOutlineIcon = ({
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
    <path d='M9,6H10.5L16.5,12L10.5,18H9V6M13.67,12L11,9.33V14.67L13.67,12Z' />
  </Svg>
)

MenuRightOutlineIcon.displayName = 'MenuRightOutlineIcon'

MenuRightOutlineIcon.defaultProps = {
  size: 24
}

export default MenuRightOutlineIcon