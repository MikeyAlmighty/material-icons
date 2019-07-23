import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaLIcon = ({
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
    <path d='M9,7V17H15V15H11V7H9Z' />
  </Svg>
)

AlphaLIcon.displayName = 'AlphaLIcon'

AlphaLIcon.defaultProps = {
  size: 24
}

export default AlphaLIcon