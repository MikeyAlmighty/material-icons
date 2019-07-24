import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PiBoxIcon = ({
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
    <path d='M5,3C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M6,7H17V9H15V14C15,14.55 15.45,15 16,15C16.55,15 17,14.55 17,14H19C19,15.66 17.66,17 16,17C14.34,17 13,15.66 13,14V9H10V17H8V9H6' />
  </Svg>
)

PiBoxIcon.displayName = 'PiBoxIcon'

PiBoxIcon.defaultProps = {
  size: 24
}

export default PiBoxIcon