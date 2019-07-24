import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BullhornOutlineIcon = ({
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
    <path d='M12,8H4C2.9,8 2,8.9 2,10V14C2,15.1 2.9,16 4,16H5V20C5,20.55 5.45,21 6,21H8C8.55,21 9,20.55 9,20V16H12L17,20V4L12,8M15,15.6L13,14H4V10H13L15,8.4V15.6M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z' />
  </Svg>
)

BullhornOutlineIcon.displayName = 'BullhornOutlineIcon'

BullhornOutlineIcon.defaultProps = {
  size: 24
}

export default BullhornOutlineIcon