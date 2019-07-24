import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SdIcon = ({
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
    <path d='M18,8H16V4H18M15,8H13V4H15M12,8H10V4H12M18,2H10L4,8V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2Z' />
  </Svg>
)

SdIcon.displayName = 'SdIcon'

SdIcon.defaultProps = {
  size: 24
}

export default SdIcon