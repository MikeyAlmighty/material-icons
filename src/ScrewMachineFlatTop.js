import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ScrewMachineFlatTopIcon = ({
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
    <path d='M14.5,7.3L13.5,8V7H10.5V10L9.5,10.7V11.7L14.5,8.4V7.3M14.5,11.3L13.5,12V10L10.5,12V14L9.5,14.7V15.7L14.5,12.4V11.3M14.5,15.3L13.5,16V14L10.5,16V18L9.5,18.7V19.7L14.5,16.4V15.3M8,3C8,3 7,3 7,4L10,6H14L17,4C17,4 17,3 16,3C15,3 8,3 8,3M13.5,18V21H10.5V20L13.5,18Z' />
  </Svg>
)

ScrewMachineFlatTopIcon.displayName = 'ScrewMachineFlatTopIcon'

ScrewMachineFlatTopIcon.defaultProps = {
  size: 24
}

export default ScrewMachineFlatTopIcon