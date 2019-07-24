import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TableColumnPlusBeforeIcon = ({
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
    <path d='M13,2C11.9,2 11,2.9 11,4V20C11,21.1 11.9,22 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z' />
  </Svg>
)

TableColumnPlusBeforeIcon.displayName = 'TableColumnPlusBeforeIcon'

TableColumnPlusBeforeIcon.defaultProps = {
  size: 24
}

export default TableColumnPlusBeforeIcon