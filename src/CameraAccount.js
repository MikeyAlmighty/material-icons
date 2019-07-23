import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CameraAccountIcon = ({
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
    <path d='M4,5H7L9,3H15L17,5H20C21.1,5 22,5.9 22,7V19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19V7C2,5.9 2.9,5 4,5M16,17V16C16,14.67 13.33,14 12,14C10.67,14 8,14.67 8,16V17H16M12,9C10.9,9 10,9.9 10,11C10,12.1 10.9,13 12,13C13.1,13 14,12.1 14,11C14,9.9 13.1,9 12,9Z' />
  </Svg>
)

CameraAccountIcon.displayName = 'CameraAccountIcon'

CameraAccountIcon.defaultProps = {
  size: 24
}

export default CameraAccountIcon