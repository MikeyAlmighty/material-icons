import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HospitalMarkerIcon = ({
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
    <path d='M12,2C15.86,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9C5,5.13 8.13,2 12,2M9,6V12H11V10H13V12H15V6H13V8H11V6H9Z' />
  </Svg>
)

HospitalMarkerIcon.displayName = 'HospitalMarkerIcon'

HospitalMarkerIcon.defaultProps = {
  size: 24
}

export default HospitalMarkerIcon