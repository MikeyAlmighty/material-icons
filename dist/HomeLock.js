import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeLockIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M12,9C13.66,9 15,10.34 15,12V13H16V17H8V13H9V12C9,10.34 10.34,9 12,9M12,11C11.45,11 11,11.45 11,12V13H13V12C13,11.5 12.6,11 12,11Z' />
  </Svg>
)

HomeLockIcon.displayName = 'HomeLockIcon'

HomeLockIcon.defaultProps = {
  size: 24
}

export default HomeLockIcon