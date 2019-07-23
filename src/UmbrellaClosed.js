import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const UmbrellaClosedIcon = ({
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
    <path d='M12,1.53L17.5,15H13V19C13,20.66 11.66,22 10,22C8.34,22 7,20.66 7,19V18H9V19C9,19.55 9.45,20 10,20C10.55,20 11,19.55 11,19V15H6.5L12,1.53Z' />
  </Svg>
)

UmbrellaClosedIcon.displayName = 'UmbrellaClosedIcon'

UmbrellaClosedIcon.defaultProps = {
  size: 24
}

export default UmbrellaClosedIcon