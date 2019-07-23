import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowExpandUpIcon = ({
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
    <path d='M2,20V22H22V20H13V5.83L18.5,11.33L19.92,9.92L12,2L4.08,9.92L5.5,11.33L11,5.83V20H2Z' />
  </Svg>
)

ArrowExpandUpIcon.displayName = 'ArrowExpandUpIcon'

ArrowExpandUpIcon.defaultProps = {
  size: 24
}

export default ArrowExpandUpIcon