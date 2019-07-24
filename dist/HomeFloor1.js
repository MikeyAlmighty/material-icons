import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeFloor1Icon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M10,8H14V18H12V10H10V8Z' />
  </Svg>
)

HomeFloor1Icon.displayName = 'HomeFloor1Icon'

HomeFloor1Icon.defaultProps = {
  size: 24
}

export default HomeFloor1Icon