import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RssOffIcon = ({
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
    <path d='M2.5,3.77L3.78,2.5L21.5,20.22L20.23,21.5L18.73,20H16.73C16.73,19.25 16.67,18.5 16.54,17.81L6.19,7.46C5.5,7.33 4.75,7.27 4,7.27V5.27L2.5,3.77M6.18,15.64C7.38,15.64 8.36,16.62 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82C4,16.62 4.98,15.64 6.18,15.64M4,10.1C9.47,10.1 13.9,14.53 13.9,20H11.07C11.07,16.1 7.9,12.93 4,12.93V10.1M9.13,5.31C13.59,6.87 17.13,10.41 18.69,14.87L9.13,5.31Z' />
  </Svg>
)

RssOffIcon.displayName = 'RssOffIcon'

RssOffIcon.defaultProps = {
  size: 24
}

export default RssOffIcon