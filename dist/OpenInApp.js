import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const OpenInAppIcon = ({
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
    <path d='M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H9V18H5V8H19V18H15V20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z' />
  </Svg>
)

OpenInAppIcon.displayName = 'OpenInAppIcon'

OpenInAppIcon.defaultProps = {
  size: 24
}

export default OpenInAppIcon