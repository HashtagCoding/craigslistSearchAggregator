import React from 'react';
import ButtonMenu from '../containers/ButtonMenu';
import Contentful from '../containers/Contentful';
import Craigslist from './../containers/Craigslist';
import CraigslistJobs from './../containers/CraigslistJobsContainer';
import Instagram from '../containers/Instagram';
import Jobs from '../containers/JobsContainer';
import Menubar from './MenuBar';
import Reddit from './Reddit';
import Twitter from './../containers/Twitter';

const App = () => (
  <div>
    <Menubar />
    <ButtonMenu />
    <Reddit />
    <Contentful />
    <Instagram />
    <Twitter />
    <Jobs />
    {/* <Craigslist /> */}
    {/* <CraigslistJobs /> */}
  </div>
);

export default App;
