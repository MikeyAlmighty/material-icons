import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PurseIcon = ({
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
    <path d='M22,19.1L21,10.5C21,9.59 20.21,9 19.3,9H16V5L14,3H10L8,5V9H4.7C3.79,9 3,9.59 3,10.5L2,19.1C2,20.06 2.74,21 3.7,21H20.3C21.26,21 22,20.06 22,19.1M10,5H14V9H10' />
  </Svg>
)

PurseIcon.displayName = 'PurseIcon'

PurseIcon.defaultProps = {
  size: 24
}

export default PurseIcon