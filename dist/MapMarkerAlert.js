import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MapMarkerAlertIcon = ({
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
    <path d='M12,2C15.86,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9C5,5.13 8.13,2 12,2M11,6V11H13V6H11M11,13V15H13V13H11Z' />
  </Svg>
)

MapMarkerAlertIcon.displayName = 'MapMarkerAlertIcon'

MapMarkerAlertIcon.defaultProps = {
  size: 24
}

export default MapMarkerAlertIcon