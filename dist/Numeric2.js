import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric2Icon = ({
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
    <path d='M9,7V9H13V11H11C9.9,11 9,11.9 9,13V17H11L15,17V15H11V13H13C14.1,13 15,12.1 15,11V9C15,7.9 14.1,7 13,7H9Z' />
  </Svg>
)

Numeric2Icon.displayName = 'Numeric2Icon'

Numeric2Icon.defaultProps = {
  size: 24
}

export default Numeric2Icon