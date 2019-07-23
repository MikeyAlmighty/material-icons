import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PlusNetworkOutlineIcon = ({
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
    <path d='M15,20C15,19.45 14.55,19 14,19H13V17H17C18.1,17 19,16.1 19,15V5C19,3.9 18.1,3 17,3H7C5.9,3 5,3.9 5,5V15C5,16.1 5.9,17 7,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M7,15V5H17V15H7M15,11H13V13H11V11H9V9H11V7H13V9H15V11Z' />
  </Svg>
)

PlusNetworkOutlineIcon.displayName = 'PlusNetworkOutlineIcon'

PlusNetworkOutlineIcon.defaultProps = {
  size: 24
}

export default PlusNetworkOutlineIcon