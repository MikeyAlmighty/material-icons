import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric2CircleOutlineIcon = ({
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
    <path d='M9,7H13C14.1,7 15,7.9 15,9V11C15,12.1 14.1,13 13,13H11V15H15V17H11L9,17V13C9,11.9 9.9,11 11,11H13V9H9V7M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z' />
  </Svg>
)

Numeric2CircleOutlineIcon.displayName = 'Numeric2CircleOutlineIcon'

Numeric2CircleOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric2CircleOutlineIcon