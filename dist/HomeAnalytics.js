import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeAnalyticsIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22M9,18H7V12H9M13,18H11V10H13M17,18H15V14H17' />
  </Svg>
)

HomeAnalyticsIcon.displayName = 'HomeAnalyticsIcon'

HomeAnalyticsIcon.defaultProps = {
  size: 24
}

export default HomeAnalyticsIcon