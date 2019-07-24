import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CodeBracketsIcon = ({
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
    <path d='M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z' />
  </Svg>
)

CodeBracketsIcon.displayName = 'CodeBracketsIcon'

CodeBracketsIcon.defaultProps = {
  size: 24
}

export default CodeBracketsIcon