import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PharmacyIcon = ({
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
    <path d='M16,14H13V17H11V14H8V12H11V9H13V12H16M21,5H18.35L19.5,1.85L17.15,1L15.69,5H3V7L5,13L3,19V21H21V19L19,13L21,7V5Z' />
  </Svg>
)

PharmacyIcon.displayName = 'PharmacyIcon'

PharmacyIcon.defaultProps = {
  size: 24
}

export default PharmacyIcon