import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StamperIcon = ({
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
    <path d='M12,3C10.34,3 9,4.34 9,6C9,9 14,13 6,13C4.9,13 4,13.9 4,15V17H20V15C20,13.9 19.1,13 18,13C10,13 15,9 15,6C15,4 13.66,3 12,3M6,19V21H18V19H6Z' />
  </Svg>
)

StamperIcon.displayName = 'StamperIcon'

StamperIcon.defaultProps = {
  size: 24
}

export default StamperIcon