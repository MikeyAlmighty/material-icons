import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ReorderVerticalIcon = ({
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
    <path d='M9,3V21H11V3H9M5,3V21H7V3H5M13,3V21H15V3H13M19,3H17V21H19V3Z' />
  </Svg>
)

ReorderVerticalIcon.displayName = 'ReorderVerticalIcon'

ReorderVerticalIcon.defaultProps = {
  size: 24
}

export default ReorderVerticalIcon