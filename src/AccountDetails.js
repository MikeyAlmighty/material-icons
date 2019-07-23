import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountDetailsIcon = ({
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
    <path d='M7.5,15C8.63,15 9.82,15.26 11.09,15.77C12.35,16.29 13,16.95 13,17.77V20H2V17.77C2,16.95 2.65,16.29 3.91,15.77C5.18,15.26 6.38,15 7.5,15M13,13H22V15H13V13M13,9H22V11H13V9M13,5H22V7H13V5M7.5,8C8.88,8 10,9.12 10,10.5C10,11.88 8.88,13 7.5,13C6.12,13 5,11.88 5,10.5C5,9.12 6.12,8 7.5,8Z' />
  </Svg>
)

AccountDetailsIcon.displayName = 'AccountDetailsIcon'

AccountDetailsIcon.defaultProps = {
  size: 24
}

export default AccountDetailsIcon