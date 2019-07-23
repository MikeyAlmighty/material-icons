import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CamcorderOffIcon = ({
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
    <path d='M3.27,2L2,3.27L4.73,6H4C3.45,6 3,6.45 3,7V17C3,17.55 3.45,18 4,18H16C16.2,18 16.39,17.92 16.54,17.82L19.73,21L21,19.73M21,6.5L17,10.5V7C17,6.45 16.55,6 16,6H9.82L21,17.18V6.5Z' />
  </Svg>
)

CamcorderOffIcon.displayName = 'CamcorderOffIcon'

CamcorderOffIcon.defaultProps = {
  size: 24
}

export default CamcorderOffIcon