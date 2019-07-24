import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PanHorizontalIcon = ({
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
    <path d='M7,8L2.5,12L7,16V8M17,8V16L21.5,12L17,8M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10Z' />
  </Svg>
)

PanHorizontalIcon.displayName = 'PanHorizontalIcon'

PanHorizontalIcon.defaultProps = {
  size: 24
}

export default PanHorizontalIcon