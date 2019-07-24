import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatPilcrowIcon = ({
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
    <path d='M10,11C7.79,11 6,9.21 6,7C6,4.79 7.79,3 10,3H18V5H16V21H14V5H12V21H10V11Z' />
  </Svg>
)

FormatPilcrowIcon.displayName = 'FormatPilcrowIcon'

FormatPilcrowIcon.defaultProps = {
  size: 24
}

export default FormatPilcrowIcon