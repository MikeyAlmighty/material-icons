import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountBadgeHorizontalOutlineIcon = ({
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
    <path d='M8,9C9.1,9 10,9.9 10,11C10,12.1 9.1,13 8,13C6.9,13 6,12.1 6,11C6,9.9 6.9,9 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,8H14V10H20V8M20,12H14V14H20V12M20,16H14V18H20V16M22,4H14V6H22V20H2V6H10V4H2C0.9,4 0,4.9 0,6V20C0,21.1 0.9,22 2,22H22C23.1,22 24,21.1 24,20V6C24,4.9 23.1,4 22,4M13,6H11V2H13V6Z' />
  </Svg>
)

AccountBadgeHorizontalOutlineIcon.displayName = 'AccountBadgeHorizontalOutlineIcon'

AccountBadgeHorizontalOutlineIcon.defaultProps = {
  size: 24
}

export default AccountBadgeHorizontalOutlineIcon