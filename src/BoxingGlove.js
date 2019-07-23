import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BoxingGloveIcon = ({
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
    <path d='M19,16V6H22V16H19M12,4C8,4 7,4 7,4C7,4 2,4 2,8V14C2,15.77 3,16.76 4.07,17.31C4.4,15.43 6.03,14 8,14H11V16H8C6.9,16 6,16.9 6,18C6,19.11 6.9,20 8,20H13C17,20 17,16 17,16V6C17,6 16,4 12,4Z' />
  </Svg>
)

BoxingGloveIcon.displayName = 'BoxingGloveIcon'

BoxingGloveIcon.defaultProps = {
  size: 24
}

export default BoxingGloveIcon