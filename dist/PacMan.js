import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PacManIcon = ({
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
    <path d='M12,12L19.07,19.07C15.17,23 8.83,23 4.93,19.07C1,15.17 1,8.84 4.93,4.93C8.83,1 15.16,1 19.07,4.93L12,12M19,10C17.9,10 17,10.9 17,12C17,13.1 17.9,14 19,14C20.1,14 21,13.1 21,12C21,10.9 20.1,10 19,10Z' />
  </Svg>
)

PacManIcon.displayName = 'PacManIcon'

PacManIcon.defaultProps = {
  size: 24
}

export default PacManIcon