import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SecurityNetworkIcon = ({
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
    <path d='M13,19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17.34C8.07,16.13 6,13 6,9.67V5.67L12,3L18,5.67V9.67C18,13 15.93,16.13 13,17.34V19M12,5L8,6.69V10H12V5M12,10V16C13.91,15.53 16,13.06 16,11V10H12Z' />
  </Svg>
)

SecurityNetworkIcon.displayName = 'SecurityNetworkIcon'

SecurityNetworkIcon.defaultProps = {
  size: 24
}

export default SecurityNetworkIcon