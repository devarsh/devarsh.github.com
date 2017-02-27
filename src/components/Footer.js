import React, { Component } from 'react';
import css from './Footer.css'
export class Footer extends Component {
  render() {
    return (
      <div className={css["Bottom"]}>
        <div><h1><small>-</small> Contact <small>-</small></h1></div>
        <div><i>devarshmshah@gmail.com</i></div>
        <div>+91 99252 04916</div>
        <div className={css["Social"]}>
          <a className={css["Link"]} target="_blank" href="#"><i className="fa-lg fa fa-facebook"></i></a>
          <a className={css["Link"]} target="_blank" href="#"><i className="fa-lg fa fa-twitter"></i></a>
          <a className={css["Link"]} target="_blank" href="#"><i className="fa-lg fa fa-instagram"></i></a>
        </div>
      </div>
    );
  }
}

