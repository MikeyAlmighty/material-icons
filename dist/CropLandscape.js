import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CropLandscapeIcon = ({
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
    <path d='M19,17H5V7H19M19,5H5C3.9,5 3,5.9 3,7V17C3,18.1 3.9,19 5,19H19C20.1,19 21,18.1 21,17V7C21,5.89 20.1,5 19,5Z' />
  </Svg>
)

CropLandscapeIcon.displayName = 'CropLandscapeIcon'

CropLandscapeIcon.defaultProps = {
  size: 24
}

export default CropLandscapeIcon