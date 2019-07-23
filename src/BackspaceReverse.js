import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BackspaceReverseIcon = ({
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
    <path d='M2,21H17C17.7,21 18.2,20.6 18.6,20.1L24,12L18.6,3.9C18.2,3.4 17.7,3 17,3H2C0.9,3 0,3.9 0,5V19C0,20.1 0.9,21 2,21M5,8.4L6.4,7L10,10.6L13.6,7L15,8.4L11.4,12L15,15.6L13.6,17L10,13.4L6.4,17L5,15.6L8.6,12' />
  </Svg>
)

BackspaceReverseIcon.displayName = 'BackspaceReverseIcon'

BackspaceReverseIcon.defaultProps = {
  size: 24
}

export default BackspaceReverseIcon