import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FuseIcon = ({
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
    <path d='M8,7V17H15V7H8M11.16,16V12.87H9.41L11.91,8V11.14H13.59L11.16,16M16,2V6H7V2C7,1.45 7.45,1 8,1H15C15.55,1 16,1.45 16,2M16,18V22C16,22.55 15.55,23 15,23H8C7.45,23 7,22.55 7,22V18H16Z' />
  </Svg>
)

FuseIcon.displayName = 'FuseIcon'

FuseIcon.defaultProps = {
  size: 24
}

export default FuseIcon