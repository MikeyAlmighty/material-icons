import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowDownBoldBoxIcon = ({
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
    <path d='M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M12,17L17,12H14V8H10V12H7L12,17Z' />
  </Svg>
)

ArrowDownBoldBoxIcon.displayName = 'ArrowDownBoldBoxIcon'

ArrowDownBoldBoxIcon.defaultProps = {
  size: 24
}

export default ArrowDownBoldBoxIcon