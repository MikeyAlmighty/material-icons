import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric2CircleIcon = ({
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
    <path d='M9,7V9H13V11H11C9.9,11 9,11.9 9,13V17H11L15,17V15H11V13H13C14.1,13 15,12.1 15,11V9C15,7.9 14.1,7 13,7H9M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

Numeric2CircleIcon.displayName = 'Numeric2CircleIcon'

Numeric2CircleIcon.defaultProps = {
  size: 24
}

export default Numeric2CircleIcon