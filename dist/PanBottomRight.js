import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PanBottomRightIcon = ({
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
    <path d='M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M13,18.65L18.65,13L19,19L13,18.65Z' />
  </Svg>
)

PanBottomRightIcon.displayName = 'PanBottomRightIcon'

PanBottomRightIcon.defaultProps = {
  size: 24
}

export default PanBottomRightIcon