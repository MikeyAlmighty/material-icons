import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ApplicationIcon = ({
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
    <path d='M19,4C20.11,4 21,4.9 21,6V18C21,19.1 20.1,20 19,20H5C3.89,20 3,19.1 3,18V6C3,4.9 3.9,4 5,4H19M19,18V8H5V18H19Z' />
  </Svg>
)

ApplicationIcon.displayName = 'ApplicationIcon'

ApplicationIcon.defaultProps = {
  size: 24
}

export default ApplicationIcon