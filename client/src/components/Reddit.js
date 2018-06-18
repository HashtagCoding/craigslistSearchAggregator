import React from 'react';
import axios from 'axios';

class Reddit extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.getRedditApi();
  }

  getRedditApi() {
    axios.get('/reddit')
      .then(res => {console.log('I reddit!!!! ==>', res)})
      .catch(err => {console.log('err =>', err)})
  }
  render() {
    return (<div>red</div>)
  }
}

export default Reddit;
