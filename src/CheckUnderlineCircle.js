import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CheckUnderlineCircleIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M17,18H7V16H17V18M10.3,14L7,10.7L8.4,9.3L10.3,11.2L15.6,5.9L17,7.3L10.3,14Z' />
  </Svg>
)

CheckUnderlineCircleIcon.displayName = 'CheckUnderlineCircleIcon'

CheckUnderlineCircleIcon.defaultProps = {
  size: 24
}

export default CheckUnderlineCircleIcon