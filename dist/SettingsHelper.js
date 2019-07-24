import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SettingsHelperIcon = ({
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
    <path d='M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z' />
  </Svg>
)

SettingsHelperIcon.displayName = 'SettingsHelperIcon'

SettingsHelperIcon.defaultProps = {
  size: 24
}

export default SettingsHelperIcon