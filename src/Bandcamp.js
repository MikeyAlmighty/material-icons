import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BandcampIcon = ({
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
    <path d='M22,6L15.5,18H2L8.5,6H22Z' />
  </Svg>
)

BandcampIcon.displayName = 'BandcampIcon'

BandcampIcon.defaultProps = {
  size: 24
}

export default BandcampIcon