import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaNIcon = ({
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
    <path d='M9,7V17H11V12L13,17H15V7H13V12L11,7H9Z' />
  </Svg>
)

AlphaNIcon.displayName = 'AlphaNIcon'

AlphaNIcon.defaultProps = {
  size: 24
}

export default AlphaNIcon