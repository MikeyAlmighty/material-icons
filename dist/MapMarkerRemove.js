import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MapMarkerRemoveIcon = ({
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
    <path d='M9,2C5.14,2 2,5.14 2,9C2,14.25 9,22 9,22C9,22 16,14.25 16,9C16,5.13 12.87,2 9,2M9,6.5C10.38,6.5 11.5,7.62 11.5,9C11.5,10.38 10.38,11.5 9,11.5C7.62,11.5 6.5,10.38 6.5,9C6.5,7.62 7.62,6.5 9,6.5M16.58,14.16L15.17,15.58L17.58,18L15.17,20.41L16.58,21.82L19,19.41L21.41,21.82L22.83,20.41L20.41,18L22.83,15.58L21.41,14.16L19,16.58' />
  </Svg>
)

MapMarkerRemoveIcon.displayName = 'MapMarkerRemoveIcon'

MapMarkerRemoveIcon.defaultProps = {
  size: 24
}

export default MapMarkerRemoveIcon