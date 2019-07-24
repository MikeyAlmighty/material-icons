import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PentagonIcon = ({
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
    <path d='M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z' />
  </Svg>
)

PentagonIcon.displayName = 'PentagonIcon'

PentagonIcon.defaultProps = {
  size: 24
}

export default PentagonIcon