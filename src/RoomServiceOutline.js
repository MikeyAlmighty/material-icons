import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RoomServiceOutlineIcon = ({
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
    <path d='M12,5C13.1,5 14,5.9 14,7C14,7.24 13.96,7.47 13.88,7.69C17.95,8.5 21,11.91 21,16H3C3,11.91 6.05,8.5 10.12,7.69C10.04,7.47 10,7.24 10,7C10,5.9 10.9,5 12,5M22,19H2V17H22V19M12,9.5C8.89,9.5 6.25,11.39 5.34,14H18.66C17.75,11.39 15.11,9.5 12,9.5Z' />
  </Svg>
)

RoomServiceOutlineIcon.displayName = 'RoomServiceOutlineIcon'

RoomServiceOutlineIcon.defaultProps = {
  size: 24
}

export default RoomServiceOutlineIcon