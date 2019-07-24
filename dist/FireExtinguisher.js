import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FireExtinguisherIcon = ({
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
    <path d='M10.5,7H11.75L12,5H10.25L6,7.5V9H4V6.5L10,3H12V2H14V3H16L17,2.5V5.5L16,5H14L14.25,7H15.5C16.33,7 17,7.67 17,8.5V22H9V8.5C9,7.67 9.67,7 10.5,7Z' />
  </Svg>
)

FireExtinguisherIcon.displayName = 'FireExtinguisherIcon'

FireExtinguisherIcon.defaultProps = {
  size: 24
}

export default FireExtinguisherIcon