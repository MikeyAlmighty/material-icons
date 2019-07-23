import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CommaIcon = ({
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
    <path d='M7,3H16.95V12.96L12.96,20.94H8L11.97,12.96H7V3Z' />
  </Svg>
)

CommaIcon.displayName = 'CommaIcon'

CommaIcon.defaultProps = {
  size: 24
}

export default CommaIcon