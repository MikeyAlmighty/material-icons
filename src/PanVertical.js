import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PanVerticalIcon = ({
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
    <path d='M12,2.5L8,7H16L12,2.5M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10M8,17L12,21.5L16,17H8Z' />
  </Svg>
)

PanVerticalIcon.displayName = 'PanVerticalIcon'

PanVerticalIcon.defaultProps = {
  size: 24
}

export default PanVerticalIcon