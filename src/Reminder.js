import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ReminderIcon = ({
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
    <path d='M7.25,3C7.9,3 8.5,3.21 9,3.56V3C9,1.9 9.9,1 11,1C12.1,1 13,1.9 13,3V3.57C13.5,3.22 14.1,3 14.75,3C16.41,3 17.75,4.34 17.75,6C17.75,7.58 16.54,8.87 15,9H13V10H14.24L14.72,10.13L19.31,12.42C20.13,12.73 20.53,13.34 20.53,14.25L20.5,14.39V14.53L19.5,21.28C19.44,21.75 19.22,22.16 18.84,22.5C18.47,22.84 18.05,23 17.58,23H10C9.45,23 9,22.81 8.58,22.41L2,15.84L3.05,14.77C3.33,14.5 3.69,14.34 4.13,14.34H4.45L9,15.33V10L9,9H7V9C5.46,8.86 4.25,7.57 4.25,6C4.25,4.34 5.59,3 7.25,3M9,6C9,5.03 8.22,4.25 7.25,4.25C6.28,4.25 5.5,5.03 5.5,6C5.5,6.88 6.15,7.61 7,7.73V7.75H9V6M15,7.75V7.74C15.85,7.62 16.5,6.89 16.5,6C16.5,5.04 15.72,4.26 14.75,4.26C13.78,4.26 13,5.04 13,6V7.75H15Z' />
  </Svg>
)

ReminderIcon.displayName = 'ReminderIcon'

ReminderIcon.defaultProps = {
  size: 24
}

export default ReminderIcon