import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlusIcon = ({
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
    <path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
  </Svg>
)

PlusIcon.displayName = 'PlusIcon'

PlusIcon.defaultProps = {
  size: 24
}

export default PlusIcon