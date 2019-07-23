import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BeakerIcon = ({
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
    <path d='M3,3V5C4.1,5 5,5.9 5,7V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V7C19,5.9 19.9,5 21,5V3H3M7,9H10V10H7V9M7,11H10V12H7V11M10,16H7V15H10V16M12,14H7V13H12V14M12,8H7V7H12V8Z' />
  </Svg>
)

BeakerIcon.displayName = 'BeakerIcon'

BeakerIcon.defaultProps = {
  size: 24
}

export default BeakerIcon