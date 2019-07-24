import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewCompactIcon = ({
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
    <path d='M3,19H9V12H3V19M10,19H22V12H10V19M3,5V11H22V5H3Z' />
  </Svg>
)

ViewCompactIcon.displayName = 'ViewCompactIcon'

ViewCompactIcon.defaultProps = {
  size: 24
}

export default ViewCompactIcon