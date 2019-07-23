import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PresentationIcon = ({
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
    <path d='M2,3H10C10,1.9 10.9,1 12,1C13.1,1 14,1.9 14,3H22V5H21V16H15.25L17,22H15L13.25,16H10.75L9,22H7L8.75,16H3V5H2V3M5,5V14H19V5H5Z' />
  </Svg>
)

PresentationIcon.displayName = 'PresentationIcon'

PresentationIcon.defaultProps = {
  size: 24
}

export default PresentationIcon