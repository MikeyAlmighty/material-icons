import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9Icon = ({
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
    <path d='M13,17C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H11C9.9,7 9,7.9 9,9V11C9,12.1 9.9,13 11,13H13V15H9V17H13M13,11H11V9H13V11Z' />
  </Svg>
)

Numeric9Icon.displayName = 'Numeric9Icon'

Numeric9Icon.defaultProps = {
  size: 24
}

export default Numeric9Icon