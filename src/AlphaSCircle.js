import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaSCircleIcon = ({
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
    <path d='M11,7C9.9,7 9,7.9 9,9V11C9,12.1 9.9,13 11,13H13V15H9V17H13C14.1,17 15,16.1 15,15V13C15,11.9 14.1,11 13,11H11V9H15V7H11M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

AlphaSCircleIcon.displayName = 'AlphaSCircleIcon'

AlphaSCircleIcon.defaultProps = {
  size: 24
}

export default AlphaSCircleIcon