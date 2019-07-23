import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TriforceIcon = ({
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
    <path d='M1.5,21L12,3.5L22.5,21H1.5M12,21L17,12H7L12,21Z' />
  </Svg>
)

TriforceIcon.displayName = 'TriforceIcon'

TriforceIcon.defaultProps = {
  size: 24
}

export default TriforceIcon