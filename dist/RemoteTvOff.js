import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RemoteTvOffIcon = ({
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
    <path d='M2,5.27L3.28,4L20,20.72L18.73,22L17,20.25C16.86,21.24 16,22 15,22H9C7.9,22 7,21.1 7,20V10.27L2,5.27M9,2H11V4H13V2H15C16.1,2 17,2.9 17,4V15.18L13,11.18V10H15V8H13V6H11V8H9.82L7,5.18V4C7,2.9 7.9,2 9,2M9,20H11V18H9V20M13,20H15V18.27L14.73,18H13V20M9,14V16H11V14.27L10.73,14H9Z' />
  </Svg>
)

RemoteTvOffIcon.displayName = 'RemoteTvOffIcon'

RemoteTvOffIcon.defaultProps = {
  size: 24
}

export default RemoteTvOffIcon