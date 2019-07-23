import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RewindIcon = ({
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
    <path d='M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' />
  </Svg>
)

RewindIcon.displayName = 'RewindIcon'

RewindIcon.defaultProps = {
  size: 24
}

export default RewindIcon