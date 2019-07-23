import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ApplicationImportIcon = ({
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
    <path d='M1,12H10.76L8.26,9.5L9.67,8.08L14.59,13L9.67,17.92L8.26,16.5L10.76,14H1V12M19,3C20.11,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V16H5V19H19V7H5V10H3V5C3,3.9 3.9,3 5,3H19Z' />
  </Svg>
)

ApplicationImportIcon.displayName = 'ApplicationImportIcon'

ApplicationImportIcon.defaultProps = {
  size: 24
}

export default ApplicationImportIcon