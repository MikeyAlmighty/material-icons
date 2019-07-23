import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlayIcon = ({
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
    <path d='M8,5.14V19.14L19,12.14L8,5.14Z' />
  </Svg>
)

PlayIcon.displayName = 'PlayIcon'

PlayIcon.defaultProps = {
  size: 24
}

export default PlayIcon