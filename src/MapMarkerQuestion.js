import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MapMarkerQuestionIcon = ({
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
    <path d='M12,2C8.14,2 5,5.14 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9C19,5.14 15.86,2 12,2M12.88,15.75H11.13V14H12.88M12.88,12.88H11.13C11.13,10.04 13.75,10.26 13.75,8.5C13.75,7.53 12.97,6.75 12,6.75C11.03,6.75 10.25,7.53 10.25,8.5H8.5C8.5,6.57 10.07,5 12,5C13.93,5 15.5,6.57 15.5,8.5C15.5,10.69 12.88,10.91 12.88,12.88Z' />
  </Svg>
)

MapMarkerQuestionIcon.displayName = 'MapMarkerQuestionIcon'

MapMarkerQuestionIcon.defaultProps = {
  size: 24
}

export default MapMarkerQuestionIcon