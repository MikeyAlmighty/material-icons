import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NearMeIcon = ({
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
    <path d='M21,3L3,10.53V11.5L9.84,14.16L12.5,21H13.46L21,3Z' />
  </Svg>
)

NearMeIcon.displayName = 'NearMeIcon'

NearMeIcon.defaultProps = {
  size: 24
}

export default NearMeIcon