import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlagIcon = ({
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
    <path d='M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z' />
  </Svg>
)

FlagIcon.displayName = 'FlagIcon'

FlagIcon.defaultProps = {
  size: 24
}

export default FlagIcon