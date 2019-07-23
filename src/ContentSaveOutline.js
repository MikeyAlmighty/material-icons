import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ContentSaveOutlineIcon = ({
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
    <path d='M15,5V9H5V19H9.35C8.5,18.27 8,17.19 8,16C8,13.79 9.79,12 12,12C14.21,12 16,13.79 16,16C16,17.19 15.5,18.27 14.65,19H19V7.83L16.17,5H15M5,7H13V5H5V7M17,3L21,7V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H17M12,14C10.9,14 10,14.9 10,16C10,17.1 10.9,18 12,18C13.1,18 14,17.1 14,16C14,14.9 13.1,14 12,14Z' />
  </Svg>
)

ContentSaveOutlineIcon.displayName = 'ContentSaveOutlineIcon'

ContentSaveOutlineIcon.defaultProps = {
  size: 24
}

export default ContentSaveOutlineIcon