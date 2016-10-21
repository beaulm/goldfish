import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';
import data from './components/data.jsx';
import ReactGA from 'react-ga';
require('./styles/styles.scss');

ReactGA.initialize('UA-000000-00');
ReactGA.set({ page: window.location.pathname });
ReactGA.pageview(window.location.pathname);

render(<App data={data.CatalogEntryView[0]}/>, document.getElementById('app'));
