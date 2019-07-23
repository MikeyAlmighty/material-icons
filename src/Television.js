import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TelevisionIcon = ({
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
    <path d='M21,17H3V5H21M21,3H3C1.9,3 1,3.9 1,5V17C1,18.1 1.9,19 3,19H8V21H16V19H21C22.1,19 23,18.1 23,17V5C23,3.9 22.1,3 21,3Z' />
  </Svg>
)

TelevisionIcon.displayName = 'TelevisionIcon'

TelevisionIcon.defaultProps = {
  size: 24
}

export default TelevisionIcon