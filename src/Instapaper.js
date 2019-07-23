import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const InstapaperIcon = ({
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
    <path d='M10,5C10,4.45 9.55,4 9,4H8V2H16V4H15C14.45,4 14,4.45 14,5V19C14,19.55 14.45,20 15,20H16V22H8V20H9C9.55,20 10,19.55 10,19V5Z' />
  </Svg>
)

InstapaperIcon.displayName = 'InstapaperIcon'

InstapaperIcon.defaultProps = {
  size: 24
}

export default InstapaperIcon