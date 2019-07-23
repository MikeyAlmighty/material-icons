import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewCompactOutlineIcon = ({
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
    <path d='M3,5V19H22V5H3M5,7H20V11H5V7M5,17V13H9V17H5M11,17V13H20V17H11Z' />
  </Svg>
)

ViewCompactOutlineIcon.displayName = 'ViewCompactOutlineIcon'

ViewCompactOutlineIcon.defaultProps = {
  size: 24
}

export default ViewCompactOutlineIcon