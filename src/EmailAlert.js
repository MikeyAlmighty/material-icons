import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailAlertIcon = ({
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
    <path d='M16,9V7L10,11L4,7V9L10,13L16,9M16,5C17.1,5 18,5.9 18,7V16C18,17.1 17.1,18 16,18H4C2.89,18 2,17.1 2,16V7C2,5.9 2.9,5 4,5H16M20,12V7H22V12H20M20,16V14H22V16H20Z' />
  </Svg>
)

EmailAlertIcon.displayName = 'EmailAlertIcon'

EmailAlertIcon.defaultProps = {
  size: 24
}

export default EmailAlertIcon