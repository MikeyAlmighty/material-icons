import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AngleRightIcon = ({
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
    <path d='M5,4H7V11H13V17H20V19H5V4M7,17H11V13H7V17Z' />
  </Svg>
)

AngleRightIcon.displayName = 'AngleRightIcon'

AngleRightIcon.defaultProps = {
  size: 24
}

export default AngleRightIcon