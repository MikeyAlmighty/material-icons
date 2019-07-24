import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SkipPreviousOutlineIcon = ({
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
    <path d='M6,6H8V18H6M9.5,12L18,18V6M16,14.14L12.97,12L16,9.86V14.14Z' />
  </Svg>
)

SkipPreviousOutlineIcon.displayName = 'SkipPreviousOutlineIcon'

SkipPreviousOutlineIcon.defaultProps = {
  size: 24
}

export default SkipPreviousOutlineIcon