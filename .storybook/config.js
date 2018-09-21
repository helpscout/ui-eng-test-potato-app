import { configure } from '@storybook/react';
import 'spectre.css/dist/spectre-icons.css';
import 'spectre.css/dist/spectre.css';

const req = require.context('../stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
