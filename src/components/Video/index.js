import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={styles.wrapperStyle}>
        <iframe
          width="560"
          height="349"
          src={this.props.src}
          frameborder="0"
          allowfullscreen
          style={styles.iframeStyle}
        >
        </iframe>
      </div>
    );
  }
}

const styles = {
  wrapperStyle: {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: '25px',
    height: 0,
  },
  iframeStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
}

export default Video;
