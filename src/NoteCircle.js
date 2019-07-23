import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NoteCircleIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7.5H15V9.5H13V14.5C13,15.6 12.1,16.5 11,16.5C9.9,16.5 9,15.6 9,14.5C9,13.4 9.9,12.5 11,12.5C11.36,12.5 11.7,12.61 12,12.78' />
  </Svg>
)

NoteCircleIcon.displayName = 'NoteCircleIcon'

NoteCircleIcon.defaultProps = {
  size: 24
}

export default NoteCircleIcon