import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileMusicOutlineIcon = ({
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
    <path d='M14,2L20,8V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2H14M18,20V9H13V4H6V20H18M13,10V12H11V17C11,18.1 10.1,19 9,19C7.9,19 7,18.1 7,17C7,15.9 7.9,15 9,15C9.4,15 9.7,15.1 10,15.3V10H13Z' />
  </Svg>
)

FileMusicOutlineIcon.displayName = 'FileMusicOutlineIcon'

FileMusicOutlineIcon.defaultProps = {
  size: 24
}

export default FileMusicOutlineIcon