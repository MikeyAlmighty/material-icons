import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MenuLeftIcon = ({
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
    <path d='M14,7L9,12L14,17V7Z' />
  </Svg>
)

MenuLeftIcon.displayName = 'MenuLeftIcon'

MenuLeftIcon.defaultProps = {
  size: 24
}

export default MenuLeftIcon