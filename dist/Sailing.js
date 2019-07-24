import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SailingIcon = ({
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
    <path d='M14,3L5,14H14M3,16L6,21H18L21,16' />
  </Svg>
)

SailingIcon.displayName = 'SailingIcon'

SailingIcon.defaultProps = {
  size: 24
}

export default SailingIcon