import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlayOutlineIcon = ({
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
    <path d='M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12' />
  </Svg>
)

PlayOutlineIcon.displayName = 'PlayOutlineIcon'

PlayOutlineIcon.defaultProps = {
  size: 24
}

export default PlayOutlineIcon