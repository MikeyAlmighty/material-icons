import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuSwapIcon = ({
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
    <path d='M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z' />
  </Svg>
)

MenuSwapIcon.displayName = 'MenuSwapIcon'

MenuSwapIcon.defaultProps = {
  size: 24
}

export default MenuSwapIcon