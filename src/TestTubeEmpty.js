import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TestTubeEmptyIcon = ({
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
    <path d='M7,2H17V4H16V18C16,20.21 14.21,22 12,22C9.79,22 8,20.21 8,18V4H7V2M14,4H10V18C10,19.1 10.9,20 12,20C13.1,20 14,19.1 14,18V4Z' />
  </Svg>
)

TestTubeEmptyIcon.displayName = 'TestTubeEmptyIcon'

TestTubeEmptyIcon.defaultProps = {
  size: 24
}

export default TestTubeEmptyIcon