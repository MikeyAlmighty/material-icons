import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PictureInPictureTopRightIcon = ({
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
    <path d='M19,7H11V13H19V7M21,3H3C1.9,3 1,3.9 1,5V19C1,20.1 1.9,21 3,21H21C22.1,21 23,20.1 23,19V5C23,3.9 22.1,3 21,3M21,19H3V5H21V19Z' />
  </Svg>
)

PictureInPictureTopRightIcon.displayName = 'PictureInPictureTopRightIcon'

PictureInPictureTopRightIcon.defaultProps = {
  size: 24
}

export default PictureInPictureTopRightIcon