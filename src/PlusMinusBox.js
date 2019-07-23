import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlusMinusBoxIcon = ({
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
    <path d='M5,3C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5M11,6H13V9H16V11H13V14H11V11H8V9H11V6M8,16H16V18H8V16Z' />
  </Svg>
)

PlusMinusBoxIcon.displayName = 'PlusMinusBoxIcon'

PlusMinusBoxIcon.defaultProps = {
  size: 24
}

export default PlusMinusBoxIcon