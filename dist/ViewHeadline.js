import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewHeadlineIcon = ({
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
    <path d='M4,5V7H21V5M4,11H21V9H4M4,19H21V17H4M4,15H21V13H4V15Z' />
  </Svg>
)

ViewHeadlineIcon.displayName = 'ViewHeadlineIcon'

ViewHeadlineIcon.defaultProps = {
  size: 24
}

export default ViewHeadlineIcon