import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeAccountIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M12,8.75C13.24,8.75 14.25,9.76 14.25,11C14.25,12.24 13.24,13.25 12,13.25C10.76,13.25 9.75,12.24 9.75,11C9.75,9.76 10.76,8.75 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z' />
  </Svg>
)

HomeAccountIcon.displayName = 'HomeAccountIcon'

HomeAccountIcon.defaultProps = {
  size: 24
}

export default HomeAccountIcon