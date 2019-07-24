import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewColumnIcon = ({
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
    <path d='M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z' />
  </Svg>
)

ViewColumnIcon.displayName = 'ViewColumnIcon'

ViewColumnIcon.defaultProps = {
  size: 24
}

export default ViewColumnIcon