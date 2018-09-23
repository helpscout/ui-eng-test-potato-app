import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const sizeStories = storiesOf('Button/Sizes', module)

sizeStories.add('Normal', () => <Button>Click me!</Button>)
sizeStories.add('Small', () => <Button size="small">Click me!</Button>)
sizeStories.add('Large', () => <Button size="large">Click me!</Button>)
sizeStories.add('Block', () => <Button block>Click me!</Button>)

const typeStories = storiesOf('Button/Types', module)

typeStories.add('Default', () => <Button>Click me!</Button>)
typeStories.add('Primary', () => <Button type="primary">Click me!</Button>)
typeStories.add('Success', () => <Button type="success">Click me!</Button>)
typeStories.add('Error', () => <Button type="error">Click me!</Button>)

const statusStories = storiesOf('Button/Status', module)

statusStories.add('Default', () => <Button>Click me!</Button>)
statusStories.add('Loading', () => <Button status="loading">Click me!</Button>)
statusStories.add('Success', () => <Button status="success">Click me!</Button>)
statusStories.add('Error', () => <Button status="error">Click me!</Button>)

const htmlLinkStories = storiesOf('Button/HTML Link', module)

htmlLinkStories.add('Button as HTML link', () => <Button href="https://github.com">Go to github</Button>)

const linkComponentStories = storiesOf('Button/Link Component', module)

linkComponentStories.add('React Router Link', () => (
  <Router>
    <Button linkComponent={<Link to="/about">About (This is a react router link)</Link>} />
  </Router>
))