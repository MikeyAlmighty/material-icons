import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FacebookBoxIcon = ({
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
    <path d='M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M18,5H15.5C13.57,5 12,6.57 12,8.5V11H10V14H12V21H15V14H18V11H15V9C15,8.45 15.45,8 16,8H18V5Z' />
  </Svg>
)

FacebookBoxIcon.displayName = 'FacebookBoxIcon'

FacebookBoxIcon.defaultProps = {
  size: 24
}

export default FacebookBoxIcon