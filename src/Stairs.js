import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const StairsIcon = ({
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
    <path d='M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z' />
  </Svg>
)

StairsIcon.displayName = 'StairsIcon'

StairsIcon.defaultProps = {
  size: 24
}

export default StairsIcon