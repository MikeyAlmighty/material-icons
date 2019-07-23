import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewGridIcon = ({
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
    <path d='M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3' />
  </Svg>
)

ViewGridIcon.displayName = 'ViewGridIcon'

ViewGridIcon.defaultProps = {
  size: 24
}

export default ViewGridIcon