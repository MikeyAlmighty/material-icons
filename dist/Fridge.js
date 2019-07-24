import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FridgeIcon = ({
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
    <path d='M7,2H17C18.1,2 19,2.9 19,4V9H5V4C5,2.9 5.9,2 7,2M19,19C19,20.1 18.1,21 17,21V22H15V21H9V22H7V21C5.9,21 5,20.1 5,19V10H19V19M8,5V7H10V5H8M8,12V15H10V12H8Z' />
  </Svg>
)

FridgeIcon.displayName = 'FridgeIcon'

FridgeIcon.defaultProps = {
  size: 24
}

export default FridgeIcon