import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaWCircleIcon = ({
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
    <path d='M9,17H15C16.1,17 17,16.1 17,15V7H15V15H13V8H11V15H9V7H7V15C7,16.1 7.9,17 9,17M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

AlphaWCircleIcon.displayName = 'AlphaWCircleIcon'

AlphaWCircleIcon.defaultProps = {
  size: 24
}

export default AlphaWCircleIcon