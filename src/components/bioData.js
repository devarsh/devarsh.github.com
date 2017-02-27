import React, { Component } from 'react';
import css from './bioData.css'


export class BioData extends Component {

  render() {
    console.log(css)
    return (
      <div className={css["wrapper"]}>
        <div className={css["top"]}>
          <div className={css["top_Wrapper"]}>
            <div className={css["top_Wrapper_left"]}>
              <small>Hello</small>
              <div className={css["jumboRegular"]}>I'M</div>
              <div className={css["jumboBold"]}>Devarsh <br/>Shah</div>
            </div>
            <div className={css["top_Wrapper_right"]}>
            <img className={css["top_Wrapper_right_img"]}
            src="" />
            </div>
        </div>
        </div>
        <div className={css["middle"]}>middle</div>
        <div className={css["bottom"]}>
        <div className={css["bottom_Wrapper"]}>
          <div><h1><small>-</small> Contact <small>-</small></h1></div>
          <div><i>devarshmshah@gmail.com</i></div>
          <div>+91 99252 04916</div>
          <div className={css["bottom_Social"]}>
            <a className={css["bottom_Social_Link"]} target="_blank" href="#"><i className="fa-lg fa fa-facebook"></i></a>
            <a className={css["bottom_Social_Link"]} target="_blank" href="#"><i className="fa-lg fa fa-twitter"></i></a>
            <a className={css["bottom_Social_Link"]} target="_blank" href="#"><i className="fa-lg fa fa-instagram"></i></a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
