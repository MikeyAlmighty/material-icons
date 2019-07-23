import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DeleteSweepOutlineIcon = ({
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
    <path d='M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M11,10V18H5V10H11M13,8H3V18C3,19.1 3.9,20 5,20H11C12.1,20 13,19.1 13,18V8M14,5H11L10,4H6L5,5H2V7H14V5Z' />
  </Svg>
)

DeleteSweepOutlineIcon.displayName = 'DeleteSweepOutlineIcon'

DeleteSweepOutlineIcon.defaultProps = {
  size: 24
}

export default DeleteSweepOutlineIcon