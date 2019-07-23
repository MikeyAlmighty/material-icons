import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CheckboxMultipleBlankIcon = ({
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
    <path d='M22,16C22,17.1 21.1,18 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20C21.1,2 22,2.9 22,4V16M16,20V22H4C2.9,22 2,21.1 2,20V7H4V20H16Z' />
  </Svg>
)

CheckboxMultipleBlankIcon.displayName = 'CheckboxMultipleBlankIcon'

CheckboxMultipleBlankIcon.defaultProps = {
  size: 24
}

export default CheckboxMultipleBlankIcon