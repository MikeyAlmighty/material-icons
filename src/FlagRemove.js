import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlagRemoveIcon = ({
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
    <path d='M14.46,15.88L15.88,14.46L18,16.59L20.12,14.46L21.54,15.88L19.41,18L21.54,20.12L20.12,21.54L18,19.41L15.88,21.54L14.46,20.12L16.59,18L14.46,15.88M12.4,5H18V12C15.78,12 13.84,13.21 12.8,15H11L10.6,13H5V20H3V3H12L12.4,5Z' />
  </Svg>
)

FlagRemoveIcon.displayName = 'FlagRemoveIcon'

FlagRemoveIcon.defaultProps = {
  size: 24
}

export default FlagRemoveIcon