import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LightSwitchIcon = ({
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
    <path d='M7,1C5.9,1 5,1.9 5,3V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.9 18.1,1 17,1H7M7,3H17V21H7V3M9,6V18H15V6H9M10,7H14V11H10V7M10,13H14V17H10V13Z' />
  </Svg>
)

LightSwitchIcon.displayName = 'LightSwitchIcon'

LightSwitchIcon.defaultProps = {
  size: 24
}

export default LightSwitchIcon