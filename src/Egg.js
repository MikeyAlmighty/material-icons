import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EggIcon = ({
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
    <path d='M19.5,14.5C19.5,18.64 16.14,22 12,22C7.86,22 4.5,18.64 4.5,14.5C4.5,10.36 7.86,2 12,2C16.14,2 19.5,10.36 19.5,14.5Z' />
  </Svg>
)

EggIcon.displayName = 'EggIcon'

EggIcon.defaultProps = {
  size: 24
}

export default EggIcon