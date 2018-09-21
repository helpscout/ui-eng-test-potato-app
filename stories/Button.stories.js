import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Button', module)

stories.add('Default', () => <button>Hello</button>)