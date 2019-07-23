import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric5Icon = ({
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
    <path d='M9,7V13H13V15H9V17H13C14.1,17 15,16.1 15,15V13C15,11.9 14.1,11 13,11H11V9H15V7H9Z' />
  </Svg>
)

Numeric5Icon.displayName = 'Numeric5Icon'

Numeric5Icon.defaultProps = {
  size: 24
}

export default Numeric5Icon