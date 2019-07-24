import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TelevisionPlayIcon = ({
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
    <path d='M21,3H3C1.89,3 1,3.89 1,5V17C1,18.1 1.9,19 3,19H8V21H16V19H21C22.1,19 23,18.1 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7' />
  </Svg>
)

TelevisionPlayIcon.displayName = 'TelevisionPlayIcon'

TelevisionPlayIcon.defaultProps = {
  size: 24
}

export default TelevisionPlayIcon