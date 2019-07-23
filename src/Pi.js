import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PiIcon = ({
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
    <path d='M4,5V7H6V19H8V7H14V16C14,17.66 15.34,19 17,19C18.66,19 20,17.66 20,16H18C18,16.55 17.55,17 17,17C16.45,17 16,16.55 16,16V7H18V5' />
  </Svg>
)

PiIcon.displayName = 'PiIcon'

PiIcon.defaultProps = {
  size: 24
}

export default PiIcon