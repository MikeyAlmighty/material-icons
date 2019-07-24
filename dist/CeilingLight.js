import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CeilingLightIcon = ({
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
    <path d='M8,9H11V4H13V9H16L20,17H4L8,9M14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18H14Z' />
  </Svg>
)

CeilingLightIcon.displayName = 'CeilingLightIcon'

CeilingLightIcon.defaultProps = {
  size: 24
}

export default CeilingLightIcon