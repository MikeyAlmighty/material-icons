import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowCollapseLeftIcon = ({
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
    <path d='M11.92,19.92L4,12L11.92,4.08L13.33,5.5L7.83,11H22V13H7.83L13.34,18.5L11.92,19.92M4,12V2H2V22H4V12Z' />
  </Svg>
)

ArrowCollapseLeftIcon.displayName = 'ArrowCollapseLeftIcon'

ArrowCollapseLeftIcon.defaultProps = {
  size: 24
}

export default ArrowCollapseLeftIcon