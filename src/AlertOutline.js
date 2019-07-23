import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlertOutlineIcon = ({
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
    <path d='M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16' />
  </Svg>
)

AlertOutlineIcon.displayName = 'AlertOutlineIcon'

AlertOutlineIcon.defaultProps = {
  size: 24
}

export default AlertOutlineIcon