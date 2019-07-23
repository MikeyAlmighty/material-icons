import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RadioHandheldIcon = ({
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
    <path d='M9,2C8.45,2 8,2.45 8,3C8,8.67 8,14.33 8,20C8,21.11 8.89,22 10,22H15C16.11,22 17,21.11 17,20V9C17,7.89 16.11,7 15,7H10V3C10,2.45 9.55,2 9,2M10,9H15V13H10V9Z' />
  </Svg>
)

RadioHandheldIcon.displayName = 'RadioHandheldIcon'

RadioHandheldIcon.defaultProps = {
  size: 24
}

export default RadioHandheldIcon