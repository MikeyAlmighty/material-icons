import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewQuiltIcon = ({
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
    <path d='M10,5V11H21V5M16,18H21V12H16M4,18H9V5H4M10,18H15V12H10V18Z' />
  </Svg>
)

ViewQuiltIcon.displayName = 'ViewQuiltIcon'

ViewQuiltIcon.defaultProps = {
  size: 24
}

export default ViewQuiltIcon