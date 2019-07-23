import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AdobeIcon = ({
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
    <path d='M14.58,3H22V19.67L14.58,3M9.42,3H2V19.67L9.42,3M12,9.17L16.67,19.67H13.5L12.17,16.33H8.75L12,9.17Z' />
  </Svg>
)

AdobeIcon.displayName = 'AdobeIcon'

AdobeIcon.defaultProps = {
  size: 24
}

export default AdobeIcon