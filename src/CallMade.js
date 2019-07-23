import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CallMadeIcon = ({
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
    <path d='M9,5V7H15.59L4,18.59L5.41,20L17,8.41V15H19V5' />
  </Svg>
)

CallMadeIcon.displayName = 'CallMadeIcon'

CallMadeIcon.defaultProps = {
  size: 24
}

export default CallMadeIcon