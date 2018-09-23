import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const sizeStories = storiesOf('Button/Sizes', module)

sizeStories.add('Normal', () => <Button onClick={action('button-click')}>Click me!</Button>)
sizeStories.add('Small', () => <Button onClick={action('button-click')} size="small">Click me!</Button>)
sizeStories.add('Large', () => <Button onClick={action('button-click')} size="large">Click me!</Button>)
sizeStories.add('Block', () => <Button onClick={action('button-click')} block>Click me!</Button>)

const typeStories = storiesOf('Button/Types', module)

typeStories.add('Default', () => <Button onClick={action('button-click')}>Click me!</Button>)
typeStories.add('Primary', () => <Button onClick={action('button-click')} type="primary">Click me!</Button>)
typeStories.add('Success', () => <Button onClick={action('button-click')} type="success">Click me!</Button>)
typeStories.add('Error', () => <Button onClick={action('button-click')} type="error">Click me!</Button>)

const statusStories = storiesOf('Button/Status', module)

statusStories.add('Default', () => <Button onClick={action('button-click')}>Click me!</Button>)
statusStories.add('Loading', () => <Button onClick={action('button-click')} status="loading">Click me!</Button>)
statusStories.add('Success', () => <Button onClick={action('button-click')} status="success">Click me!</Button>)
statusStories.add('Error', () => <Button onClick={action('button-click')} status="error">Click me!</Button>)
statusStories.add('Disabled', () => <Button onClick={action('button-click')} disabled>You Can't Click me!</Button>)

const htmlLinkStories = storiesOf('Button/HTML Link', module)

htmlLinkStories.add('Button as HTML link', () => <Button onClick={action('button-click')} href="https://github.com">Go to github</Button>)

const linkComponentStories = storiesOf('Button/Link Component', module)

linkComponentStories.add('React Router Link', () => (
  <Router>
    <Button onClick={action('button-click')} linkComponent={<Link to="/about">About (This is a react router link)</Link>} />
  </Router>
))