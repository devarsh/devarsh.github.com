import React, { Component } from 'react';
import css from './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className={css["LeftNav"]}>
        <div className={css["imageWrapper"]}>
          <img className={css["Img"]} src="https://placeimg.com/200/200/nature/grayscale" />
        </div>
        <div className={css["jumboBold"]}>Devarsh <br/>Shah</div>
        <div className={css["contactDetailsRow"]}>
          <div><b>DOB:</b> </div>
          <div className={css["rightalign"]}>30-January-1990</div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Address:</b> </div>
          <div className={css["rightalign"]}>
          B-802 Retreat Tower<br/>
          Opp Shyamal Voltas<br/>
          Shyamal Cross Road<br/>
          Satellite,Ahmedabad<br/>
          </div>
        </div>
        <div className={css["contactDetailsCol"]}>
          <div>Phone:</div>
          <div>
          +91 9925204916
          </div>
        </div>
        <div className={css["contactDetailsCol"]}>
          <div>Email:</div>
          <div>
          devarshmshah@gmail.com
          </div>
        </div>
        <div style={{flexGrow:1}} />
        <div className={css["contactDetailsRow"]} style={{justifyContent:'space-around'}}>
          <div><a className={css["socialLink"]} href="https://www.facebook.com/Dexter099" target="_blank"><i className="fa-lg fa fa-facebook" aria-hidden="true"></i></a></div>
          <div><a className={css["socialLink"]} href="https://www.instagram.com/devarsh_099/" target="_blank"><i className="fa-lg fa fa-instagram" aria-hidden="true"></i></a></div>
          <div><a className={css["socialLink"]} href="https://twitter.com/_devarsh" target="_blank"><i className="fa-lg fa fa-twitter" aria-hidden="true"></i></a></div>
        </div>
      </div>
    );
  }
}
