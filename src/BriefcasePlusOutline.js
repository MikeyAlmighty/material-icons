import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BriefcasePlusOutlineIcon = ({
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
    <path d='M10,2H14C15.1,2 16,2.9 16,4V6H20C21.1,6 22,6.9 22,8V13.53C21.42,13 20.75,12.6 20,12.34V8H4V19H12.08C12.2,19.72 12.45,20.39 12.8,21H4C2.9,21 2,20.1 2,19V8C2,6.9 2.9,6 4,6H8V4C8,2.9 8.9,2 10,2M14,6V4H10V6H14M14,17H17V14H19V17H22V19H19V22H17V19H14V17Z' />
  </Svg>
)

BriefcasePlusOutlineIcon.displayName = 'BriefcasePlusOutlineIcon'

BriefcasePlusOutlineIcon.defaultProps = {
  size: 24
}

export default BriefcasePlusOutlineIcon