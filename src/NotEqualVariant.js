import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NotEqualVariantIcon = ({
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
    <path d='M14.08,4.61L15.92,5.4L14.8,8H19V10H13.95L12.23,14H19V16H11.38L9.92,19.4L8.08,18.61L9.2,16H5V14H10.06L11.77,10H5V8H12.63L14.08,4.61Z' />
  </Svg>
)

NotEqualVariantIcon.displayName = 'NotEqualVariantIcon'

NotEqualVariantIcon.defaultProps = {
  size: 24
}

export default NotEqualVariantIcon