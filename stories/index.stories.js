import React from 'react';

import { storiesOf } from '@storybook/react';

import {Bomb} from '../dist'

storiesOf('Icon', module)
  .add('Bomb', () => <Bomb color="tomato" size="100px"/>)
  .add('Bomb with margin', () => <Bomb m="30px" color="tomato" size="100px" />)
  .add('Bomb with background', () => <Bomb bg="pink" color="tomato" size="100px" />)
