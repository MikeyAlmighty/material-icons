import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaEIcon = ({
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
    <path d='M9,7V17H15V15H11V13H15V11H11V9H15V7H9Z' />
  </Svg>
)

AlphaEIcon.displayName = 'AlphaEIcon'

AlphaEIcon.defaultProps = {
  size: 24
}

export default AlphaEIcon