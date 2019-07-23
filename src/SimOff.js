import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SimOffIcon = ({
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
    <path d='M19,5C19,3.9 18.1,3 17,3H10L7.66,5.34L19,16.68V5M3.65,3.88L2.38,5.15L5,7.77V19C5,20.1 5.9,21 7,21H17C17.36,21 17.68,20.9 17.97,20.74L19.85,22.62L21.12,21.35L3.65,3.88Z' />
  </Svg>
)

SimOffIcon.displayName = 'SimOffIcon'

SimOffIcon.defaultProps = {
  size: 24
}

export default SimOffIcon