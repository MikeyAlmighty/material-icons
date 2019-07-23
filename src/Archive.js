import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArchiveIcon = ({
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
    <path d='M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11C9.22,11 9,11.22 9,11.5V13H15V11.5C15,11.22 14.78,11 14.5,11H9.5Z' />
  </Svg>
)

ArchiveIcon.displayName = 'ArchiveIcon'

ArchiveIcon.defaultProps = {
  size: 24
}

export default ArchiveIcon