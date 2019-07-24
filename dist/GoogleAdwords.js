import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GoogleAdwordsIcon = ({
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
    <path d='M2,22L8.5,2H15.4L9.2,20C9.2,20 8.6,22 7,22C5.9,22 2,22 2,22M16.4,5L13,15L15,20.7C15,20.7 15.4,22 17,22C18.3,22 22,22 22,22L16.4,5Z' />
  </Svg>
)

GoogleAdwordsIcon.displayName = 'GoogleAdwordsIcon'

GoogleAdwordsIcon.defaultProps = {
  size: 24
}

export default GoogleAdwordsIcon