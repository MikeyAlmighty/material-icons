import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneAndroidIcon = ({
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
    <path d='M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8C6.34,1 5,2.34 5,4V20C5,21.66 6.34,23 8,23H16C17.66,23 19,21.66 19,20V4C19,2.34 17.66,1 16,1Z' />
  </Svg>
)

CellphoneAndroidIcon.displayName = 'CellphoneAndroidIcon'

CellphoneAndroidIcon.defaultProps = {
  size: 24
}

export default CellphoneAndroidIcon