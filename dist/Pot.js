import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PotIcon = ({
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
    <path d='M19,19C19,20.1 18.1,21 17,21H7C5.9,21 5,20.1 5,19V13H3V10H21V13H19V19M6,6H8V8H6V6M11,6H13V8H11V6M16,6H18V8H16V6M18,3H20V5H18V3M13,3H15V5H13V3M8,3H10V5H8V3Z' />
  </Svg>
)

PotIcon.displayName = 'PotIcon'

PotIcon.defaultProps = {
  size: 24
}

export default PotIcon