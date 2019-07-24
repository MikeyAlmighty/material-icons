import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const YoutubeSubscriptionIcon = ({
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
    <path d='M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V12C2,10.9 2.9,10 4,10H20C21.1,10 22,10.9 22,12M16,16L10,12.73V19.26L16,16Z' />
  </Svg>
)

YoutubeSubscriptionIcon.displayName = 'YoutubeSubscriptionIcon'

YoutubeSubscriptionIcon.defaultProps = {
  size: 24
}

export default YoutubeSubscriptionIcon