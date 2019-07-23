import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PollIcon = ({
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
    <path d='M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z' />
  </Svg>
)

PollIcon.displayName = 'PollIcon'

PollIcon.defaultProps = {
  size: 24
}

export default PollIcon