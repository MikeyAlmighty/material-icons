import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaBIcon = ({
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
    <path d='M15,10.5V9C15,7.9 14.1,7 13,7H9V17H13C14.1,17 15,16.1 15,15V13.5C15,12.7 14.3,12 13.5,12C14.3,12 15,11.3 15,10.5M13,15H11V13H13V15M13,11H11V9H13V11Z' />
  </Svg>
)

AlphaBIcon.displayName = 'AlphaBIcon'

AlphaBIcon.defaultProps = {
  size: 24
}

export default AlphaBIcon