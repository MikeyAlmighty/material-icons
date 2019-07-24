import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EqualIcon = ({
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
    <path d='M19,10H5V8H19V10M19,16H5V14H19V16Z' />
  </Svg>
)

EqualIcon.displayName = 'EqualIcon'

EqualIcon.defaultProps = {
  size: 24
}

export default EqualIcon