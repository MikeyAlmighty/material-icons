import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChessPawnIcon = ({
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
    <path d='M19,22H5V20H19V22M16,18L13.2,7.74C14.72,7.07 15.41,5.31 14.74,3.79C14.08,2.27 12.31,1.58 10.79,2.25C9.27,2.91 8.58,4.68 9.25,6.2C9.55,6.89 10.1,7.44 10.79,7.74L8,18H16Z' />
  </Svg>
)

ChessPawnIcon.displayName = 'ChessPawnIcon'

ChessPawnIcon.defaultProps = {
  size: 24
}

export default ChessPawnIcon