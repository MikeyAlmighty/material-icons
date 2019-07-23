import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GasCylinderIcon = ({
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
    <path d='M16,9V14L16,20C16,21.1 15.1,22 14,22H10C8.9,22 8,21.1 8,20V14L8,9C8,7.14 9.27,5.57 11,5.13V4H9V2H15V4H13V5.13C14.73,5.57 16,7.14 16,9Z' />
  </Svg>
)

GasCylinderIcon.displayName = 'GasCylinderIcon'

GasCylinderIcon.defaultProps = {
  size: 24
}

export default GasCylinderIcon