import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';
import data from './components/data.jsx';
require('./styles/styles.scss');

render(<App data={data.CatalogEntryView[0]}/>, document.getElementById('app'));
