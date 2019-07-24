import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaTIcon = ({
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
    <path d='M9,7V9H11V17H13V9H15V7H9Z' />
  </Svg>
)

AlphaTIcon.displayName = 'AlphaTIcon'

AlphaTIcon.defaultProps = {
  size: 24
}

export default AlphaTIcon