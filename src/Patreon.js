import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PatreonIcon = ({
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
    <path d='M14.73,3C18.45,3 21.47,6.03 21.47,9.76C21.47,13.47 18.45,16.5 14.73,16.5C11,16.5 7.97,13.47 7.97,9.76C7.97,6.03 11,3 14.73,3M2.7,21V3H6V21H2.7Z' />
  </Svg>
)

PatreonIcon.displayName = 'PatreonIcon'

PatreonIcon.defaultProps = {
  size: 24
}

export default PatreonIcon