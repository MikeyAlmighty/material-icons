import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric6Icon = ({
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
    <path d='M11,7C9.9,7 9,7.9 9,9V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V13C15,11.9 14.1,11 13,11H11V9H15V7H11M11,13H13V15H11V13Z' />
  </Svg>
)

Numeric6Icon.displayName = 'Numeric6Icon'

Numeric6Icon.defaultProps = {
  size: 24
}

export default Numeric6Icon