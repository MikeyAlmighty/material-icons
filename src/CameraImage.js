import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CameraImageIcon = ({
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
    <path d='M4,5H7L9,3H15L17,5H20C21.1,5 22,5.9 22,7V19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19V7C2,5.9 2.9,5 4,5M13.09,9.45L11.05,12.18L12.6,14.25L11.73,14.91L9.27,11.64L6,16H18L13.09,9.45Z' />
  </Svg>
)

CameraImageIcon.displayName = 'CameraImageIcon'

CameraImageIcon.defaultProps = {
  size: 24
}

export default CameraImageIcon