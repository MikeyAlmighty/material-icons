import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewWeekIcon = ({
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
    <path d='M13,5H10C9.45,5 9,5.45 9,6V18C9,18.55 9.45,19 10,19H13C13.55,19 14,18.55 14,18V6C14,5.45 13.55,5 13,5M20,5H17C16.45,5 16,5.45 16,6V18C16,18.55 16.45,19 17,19H20C20.55,19 21,18.55 21,18V6C21,5.45 20.55,5 20,5M6,5H3C2.45,5 2,5.45 2,6V18C2,18.55 2.45,19 3,19H6C6.55,19 7,18.55 7,18V6C7,5.45 6.55,5 6,5Z' />
  </Svg>
)

ViewWeekIcon.displayName = 'ViewWeekIcon'

ViewWeekIcon.defaultProps = {
  size: 24
}

export default ViewWeekIcon