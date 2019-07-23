import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MicrosoftIcon = ({
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
    <path d='M2,3H11V12H2V3M11,22H2V13H11V22M21,3V12H12V3H21M21,22H12V13H21V22Z' />
  </Svg>
)

MicrosoftIcon.displayName = 'MicrosoftIcon'

MicrosoftIcon.defaultProps = {
  size: 24
}

export default MicrosoftIcon