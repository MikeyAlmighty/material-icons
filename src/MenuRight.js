import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuRightIcon = ({
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
    <path d='M10,17L15,12L10,7V17Z' />
  </Svg>
)

MenuRightIcon.displayName = 'MenuRightIcon'

MenuRightIcon.defaultProps = {
  size: 24
}

export default MenuRightIcon