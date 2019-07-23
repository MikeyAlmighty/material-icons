import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewStreamIcon = ({
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
    <path d='M4,5V11H21V5M4,18H21V12H4V18Z' />
  </Svg>
)

ViewStreamIcon.displayName = 'ViewStreamIcon'

ViewStreamIcon.defaultProps = {
  size: 24
}

export default ViewStreamIcon