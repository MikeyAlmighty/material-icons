import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountBadgeAlertIcon = ({
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
    <path d='M15,3H12V6H8V3H5C3.9,3 3,3.9 3,5V21C3,22.1 3.9,23 5,23H15C16.1,23 17,22.1 17,21V5C17,3.9 16.1,3 15,3M10,8C11.1,8 12,8.9 12,10C12,11.1 11.1,12 10,12C8.9,12 8,11.1 8,10C8,8.9 8.9,8 10,8M14,16H6V15C6,13.67 8.67,13 10,13C11.33,13 14,13.67 14,15V16M11,5H9V1H11V5M14,19H6V18H14V19M10,21H6V20H10V21M19,12V7H21V12H19M19,16V14H21V16H19Z' />
  </Svg>
)

AccountBadgeAlertIcon.displayName = 'AccountBadgeAlertIcon'

AccountBadgeAlertIcon.defaultProps = {
  size: 24
}

export default AccountBadgeAlertIcon