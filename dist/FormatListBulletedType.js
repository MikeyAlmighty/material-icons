import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FormatListBulletedTypeIcon = ({
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
    <path d='M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20C6.1,20 7,19.1 7,18C7,16.9 6.1,16 5,16C3.9,16 3,16.9 3,18C3,19.1 3.9,20 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z' />
  </Svg>
)

FormatListBulletedTypeIcon.displayName = 'FormatListBulletedTypeIcon'

FormatListBulletedTypeIcon.defaultProps = {
  size: 24
}

export default FormatListBulletedTypeIcon