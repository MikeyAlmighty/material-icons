import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LightbulbOffIcon = ({
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
    <path d='M12,2C9.76,2 7.78,3.05 6.5,4.68L16.31,14.5C17.94,13.21 19,11.24 19,9C19,5.13 15.87,2 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17C8,17.55 8.45,18 9,18H14.73L18.73,22L20,20.72L3.28,4M9,20V21C9,21.55 9.45,22 10,22H14C14.55,22 15,21.55 15,21V20H9Z' />
  </Svg>
)

LightbulbOffIcon.displayName = 'LightbulbOffIcon'

LightbulbOffIcon.defaultProps = {
  size: 24
}

export default LightbulbOffIcon