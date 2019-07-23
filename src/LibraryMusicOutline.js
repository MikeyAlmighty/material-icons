import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LibraryMusicOutlineIcon = ({
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
    <path d='M20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M20,16H8V4H20M12.5,15C13.88,15 15,13.88 15,12.5V7H18V5H14V10.5C13.58,10.19 13.07,10 12.5,10C11.12,10 10,11.12 10,12.5C10,13.88 11.12,15 12.5,15M4,6H2V20C2,21.1 2.9,22 4,22H18V20H4' />
  </Svg>
)

LibraryMusicOutlineIcon.displayName = 'LibraryMusicOutlineIcon'

LibraryMusicOutlineIcon.defaultProps = {
  size: 24
}

export default LibraryMusicOutlineIcon