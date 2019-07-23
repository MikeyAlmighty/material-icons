import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaWIcon = ({
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
    <path d='M9,17C7.9,17 7,16.1 7,15V7H9V15H11V8H13V15H15V7H17V15C17,16.1 16.1,17 15,17H9Z' />
  </Svg>
)

AlphaWIcon.displayName = 'AlphaWIcon'

AlphaWIcon.defaultProps = {
  size: 24
}

export default AlphaWIcon