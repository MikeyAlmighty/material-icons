import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Printer3DNozzleIcon = ({
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
    <path d='M7,2H17V8H19V13H16.5L13,17H11L7.5,13H5V8H7V2M10,22H2V20H10C10.55,20 11,19.55 11,19V18H13V19C13,20.66 11.66,22 10,22Z' />
  </Svg>
)

Printer3DNozzleIcon.displayName = 'Printer3DNozzleIcon'

Printer3DNozzleIcon.defaultProps = {
  size: 24
}

export default Printer3DNozzleIcon