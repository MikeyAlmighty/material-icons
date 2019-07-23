import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaWBoxIcon = ({
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
    <path d='M9,17H15C16.1,17 17,16.1 17,15V7H15V15H13V8H11V15H9V7H7V15C7,16.1 7.9,17 9,17M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3Z' />
  </Svg>
)

AlphaWBoxIcon.displayName = 'AlphaWBoxIcon'

AlphaWBoxIcon.defaultProps = {
  size: 24
}

export default AlphaWBoxIcon