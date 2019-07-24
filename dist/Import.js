import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ImportIcon = ({
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
    <path d='M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6C4.9,4 4,4.9 4,6V9H6V6H18V18H6V15H4V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18Z' />
  </Svg>
)

ImportIcon.displayName = 'ImportIcon'

ImportIcon.defaultProps = {
  size: 24
}

export default ImportIcon