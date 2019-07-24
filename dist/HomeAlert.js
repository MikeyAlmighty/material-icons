import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeAlertIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M13,18H11V16H13V18M13,14H11V9H13V14Z' />
  </Svg>
)

HomeAlertIcon.displayName = 'HomeAlertIcon'

HomeAlertIcon.defaultProps = {
  size: 24
}

export default HomeAlertIcon