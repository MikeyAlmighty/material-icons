import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RadioFmIcon = ({
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
    <path d='M3,7V17H5V13H8V11H5V9H9V7H3M13,7C11.9,7 11,7.9 11,9V17H13V9H15V16H17V9H19V17H21V9C21,7.9 20.1,7 19,7H13Z' />
  </Svg>
)

RadioFmIcon.displayName = 'RadioFmIcon'

RadioFmIcon.defaultProps = {
  size: 24
}

export default RadioFmIcon