import React, { Component } from 'react';

export default class CardFront extends Component {
  // url = (poster) => {
  //   return `src/assets/poster-imgs/${poster}.png`
  // }

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>

    )
  }
}
