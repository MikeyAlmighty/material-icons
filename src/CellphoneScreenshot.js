import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneScreenshotIcon = ({
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
    <path d='M7,1C5.9,1 5,1.9 5,3V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.9 18.1,1 17,1H7M7,4H17V20H7V4M9,6V10H10.5V7.5H13V6H9M13.5,14V16.5H11V18H15V14H13.5Z' />
  </Svg>
)

CellphoneScreenshotIcon.displayName = 'CellphoneScreenshotIcon'

CellphoneScreenshotIcon.defaultProps = {
  size: 24
}

export default CellphoneScreenshotIcon