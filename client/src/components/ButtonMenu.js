import React from 'react';

class ButtonMenu extends React.Component {
  componentDidMount() {
    // this.props.onClickGetJobs();
  }
  render() {
    return (
      <div className="text-center" style={{ marginBottom: '35px', marginTop: '25px' }}>
        <h2>Steve&apos;s Job Search Aggregator</h2>
        <h4>See all your job searches at once</h4>
        <button className="btn btn-default btn-sm" onClick={this.props.onClickCraigslist}>CraigsList</button>
        <button className="btn btn-default btn-sm" onClick={this.props.onClickInstagram}>Instagram</button>
        <button className="btn btn-default btn-sm" onClick={this.props.onClickTwitter}>Twitter</button>
        <button className="btn btn-default btn-sm" onClick={this.props.onClickContentful}>CMS</button>
        <button className="btn btn-default btn-sm" onClick={this.props.onClick_getCraigslistJobs}>CL Computer Gigs</button>
        <button className="btn btn-default btn-sm" onClick={this.props.onClick_getCraigslistJobs}>CL Event Gigs</button>
      </div>
    );
  }
}

export default ButtonMenu;
