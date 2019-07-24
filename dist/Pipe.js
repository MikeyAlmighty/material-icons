import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PipeIcon = ({
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
    <path d='M22,14H20V16H14V13H16V11H14V6C14,4.9 13.1,4 12,4H4V2H2V10H4V8H10V11H8V13H10V18C10,19.1 10.9,20 12,20H20V22H22' />
  </Svg>
)

PipeIcon.displayName = 'PipeIcon'

PipeIcon.defaultProps = {
  size: 24
}

export default PipeIcon