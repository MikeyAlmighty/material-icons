import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ElevatorIcon = ({
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
    <path d='M7,2L11,6H8V10H6V6H3L7,2M17,10L13,6H16V2H18V6H21L17,10M7,12H17C18.1,12 19,12.9 19,14V20C19,21.1 18.1,22 17,22H7C5.9,22 5,21.1 5,20V14C5,12.9 5.9,12 7,12M7,14V20H17V14H7Z' />
  </Svg>
)

ElevatorIcon.displayName = 'ElevatorIcon'

ElevatorIcon.defaultProps = {
  size: 24
}

export default ElevatorIcon