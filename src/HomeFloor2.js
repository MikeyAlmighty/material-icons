import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeFloor2Icon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M9,8H13C14.1,8 15,8.9 15,10V12C15,13.1 14.1,14 13,14H11V16H15V18H9V14C9,12.9 9.9,12 11,12H13V10H9V8Z' />
  </Svg>
)

HomeFloor2Icon.displayName = 'HomeFloor2Icon'

HomeFloor2Icon.defaultProps = {
  size: 24
}

export default HomeFloor2Icon