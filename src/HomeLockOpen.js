import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeLockOpenIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M12,8C13.66,8 15,9.34 15,11H13C13,10.45 12.55,10 12,10C11.45,10 11,10.45 11,11V13H16V17H8V13H9V11C9,9.34 10.34,8 12,8Z' />
  </Svg>
)

HomeLockOpenIcon.displayName = 'HomeLockOpenIcon'

HomeLockOpenIcon.defaultProps = {
  size: 24
}

export default HomeLockOpenIcon