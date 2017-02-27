import React, { Component } from 'react';
import css from './Layout.css'
import {Header} from './Header.js'
import {Content} from './Content.js'



export class Layout extends Component {

  render() {
    console.log(css)
    return (
      <div className={css["layout"]}>
        <div className={css["leftNav"]}>
        <Header/>
        </div>
        <div className={css["content"]}>
        <Content/>
        </div>
      </div>
    );
  }
}
