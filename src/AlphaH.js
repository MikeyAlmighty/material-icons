import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaHIcon = ({
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
    <path d='M9,7V17H11V13H13V17H15V7H13V11H11V7H9Z' />
  </Svg>
)

AlphaHIcon.displayName = 'AlphaHIcon'

AlphaHIcon.defaultProps = {
  size: 24
}

export default AlphaHIcon