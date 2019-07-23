import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ExclamationIcon = ({
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
    <path d='M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z' />
  </Svg>
)

ExclamationIcon.displayName = 'ExclamationIcon'

ExclamationIcon.defaultProps = {
  size: 24
}

export default ExclamationIcon