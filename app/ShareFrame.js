import { default as React, Component } from 'react';
import { render } from 'react-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { dataOperation } from './service/DataOperation';
import { urlShare } from './service/UrlShare';

export class ShareFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
  }
  generateUrl() {
    let prefix = this.props.pluginList[this.props.selectedPlugin].url;
    let url = prefix+'#?input_state='+urlShare.url+'&hf=false';
    if(urlShare.url == '') {
      setTimeout(() => {this.setState({check: true})}, 1500); 
      return;
    } else {
      console.log(urlShare.url);
      return url;
    }
  }
  iframeAttr() {
    return {
      width: '100%',
      height: '100%',
      frameBorder: '0'
    }
  }
  render() {
    return (
    <div className="mappingContainer">
      <iframe className="iframeSrc" src={this.generateUrl()} {...this.iframeAttr()} />
    </div>
    );
  }
}