import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WatchVariantIcon = ({
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
    <path d='M8,0L7.17,5H7C5.9,5 5,5.9 5,7V17C5,18.11 5.9,19 7,19H7.17L8,24H16L16.83,19H17C18.1,19 19,18.1 19,17V7C19,5.89 18.1,5 17,5H16.83L16,0H8M7,7H17V17H7V7Z' />
  </Svg>
)

WatchVariantIcon.displayName = 'WatchVariantIcon'

WatchVariantIcon.defaultProps = {
  size: 24
}

export default WatchVariantIcon