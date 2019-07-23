import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WallSconceIcon = ({
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
    <path d='M11,4L7,13H19L15,4H11M4,14V22H6V19H14V14H12V17H6V14H4Z' />
  </Svg>
)

WallSconceIcon.displayName = 'WallSconceIcon'

WallSconceIcon.defaultProps = {
  size: 24
}

export default WallSconceIcon