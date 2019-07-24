import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CompareIcon = ({
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
    <path d='M19,3H14V5H19V18L14,12V21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H10V23H12V1H10V3Z' />
  </Svg>
)

CompareIcon.displayName = 'CompareIcon'

CompareIcon.defaultProps = {
  size: 24
}

export default CompareIcon