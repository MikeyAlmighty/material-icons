import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChurchIcon = ({
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
    <path d='M11,2H13V4H15V6H13V9.4L22,13V15L20,14.2V22H14V17C14,15.9 13.1,15 12,15C10.9,15 10,15.9 10,17V22H4V14.2L2,15V13L11,9.4V6H9V4H11V2M6,20H8V15L7,14L6,15V20M16,20H18V15L17,14L16,15V20Z' />
  </Svg>
)

ChurchIcon.displayName = 'ChurchIcon'

ChurchIcon.defaultProps = {
  size: 24
}

export default ChurchIcon