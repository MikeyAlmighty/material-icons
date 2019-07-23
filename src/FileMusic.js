import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FileMusicIcon = ({
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
    <path d='M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M13,13H11V18C11,19.1 10.1,20 9,20C7.9,20 7,19.1 7,18C7,16.9 7.9,16 9,16C9.4,16 9.7,16.1 10,16.3V11H13V13M13,9V3.5L18.5,9H13Z' />
  </Svg>
)

FileMusicIcon.displayName = 'FileMusicIcon'

FileMusicIcon.defaultProps = {
  size: 24
}

export default FileMusicIcon