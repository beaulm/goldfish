import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import data from './data.jsx';

render(<App data={data.CatalogEntryView[0]}/>, document.getElementById('app'));