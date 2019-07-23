import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ContainIcon = ({
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
    <path d='M2,3H8V5H4V19H8V21H2V3M7,17V15H9V17H7M11,17V15H13V17H11M15,17V15H17V17H15M22,3V21H16V19H20V5H16V3H22Z' />
  </Svg>
)

ContainIcon.displayName = 'ContainIcon'

ContainIcon.defaultProps = {
  size: 24
}

export default ContainIcon