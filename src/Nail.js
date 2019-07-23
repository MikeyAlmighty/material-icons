import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NailIcon = ({
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
    <path d='M13.5,5V16L12,22L10.5,16V5H13.5M17,2H7V4H17V2Z' />
  </Svg>
)

NailIcon.displayName = 'NailIcon'

NailIcon.defaultProps = {
  size: 24
}

export default NailIcon