import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MapMarkerAlertOutlineIcon = ({
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
    <path d='M12,2C15.87,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9C5,5.13 8.13,2 12,2M12,4C9.24,4 7,6.24 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9C17,6.24 14.76,4 12,4M11,6H13V11H11V6M11,13H13V15H11V13Z' />
  </Svg>
)

MapMarkerAlertOutlineIcon.displayName = 'MapMarkerAlertOutlineIcon'

MapMarkerAlertOutlineIcon.defaultProps = {
  size: 24
}

export default MapMarkerAlertOutlineIcon