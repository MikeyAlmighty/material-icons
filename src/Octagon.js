import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const OctagonIcon = ({
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
    <path d='M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27' />
  </Svg>
)

OctagonIcon.displayName = 'OctagonIcon'

OctagonIcon.defaultProps = {
  size: 24
}

export default OctagonIcon