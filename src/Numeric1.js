import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric1Icon = ({
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
    <path d='M10,7V9H12V17H14V7H10Z' />
  </Svg>
)

Numeric1Icon.displayName = 'Numeric1Icon'

Numeric1Icon.defaultProps = {
  size: 24
}

export default Numeric1Icon