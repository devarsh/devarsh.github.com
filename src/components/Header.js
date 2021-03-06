import React, { Component } from 'react';
import css from './Header.css'
var headerImage = require('file-loader?name=[name].[ext]!assets/Profile_pix.jpg')
//var headerImage = "https://scontent-sit4-1.cdninstagram.com/t51.2885-15/e35/12976438_1045472078860895_444227948_n.jpg"
//var headerImage = "https://scontent-bom1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12976438_1045472078860895_444227948_n.jpg"

var kundli = require('file-loader?name=[name].[ext]!assets/kundli.webp')
var pic1 = require('file-loader?name=[name].[ext]!assets/DSC_7811.JPG')
var pic2 = require('file-loader?name=[name].[ext]!assets/DSC_7827.JPG')

export class Header extends Component {
  render() {
    return (
      <div className={css["LeftNav"]}>
        {/*  <div className={css["imageWrapper"]}>
          <img className={css["Img"]} alt="Profile Pic" src={headerImage} />
    </div>  */}
        <div className={css["jumboBold"]} style={{"paddingTop":"15px"}}>Devarsh Shah</div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Date of Birth:</b> </div>
          <div className={css["rightalign"]}>30-January-1990</div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Time of Birth:</b> </div>
          <div className={css["rightalign"]}>6:45 PM</div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Place of Birth:</b> </div>
          <div className={css["rightalign"]}>Ahmedabad, India</div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Cast:</b> </div>
          <div className={css["rightalign"]}>Vaishanav Vanik</div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Sub Cast:</b> </div>
          <div className={css["rightalign"]}>Visha khadayta</div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Height:</b> </div>
          <div className={css["rightalign"]}>5 ft. 7 in</div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Weight:</b> </div>
          <div className={css["rightalign"]}>60 Kgs</div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Address:</b> </div>
          <div className={css["rightalign"]}>
          B-802 Retreat Tower<br/>
          Opp Shyamal Voltas<br/>
          Shyamal Cross Road<br/>
          Satellite, Ahmedabad<br/>
          </div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Phone:</b> </div>
          <div className={css["rightalign"]}>
          <a style={{color:'black'}} href="tel:+919925204916">9979-887896</a>
          </div>
        </div>
        <div className={css["contactDetailsRow"]}>
          <div><b>Email: </b></div>
          <div className={css["rightalign"]}>
          <a style={{color:'black'}} href="mailto:ashini1965@gmail.com?Subject=Lets Meetup :)" target="_top">
          ashini1965@gmail.com
          </a>
          </div>
        </div>
        <br/>
        <div className={`${css["contactDetailsCol"]} ${css["hidden-print"]}`}>
          <div>
          <a style={{color:'black'}} href={kundli} target="_top">
            <b>Kundli</b>
          </a>
          <a style={{color:'black'}} href={pic1} target="_blank">
            <i style={{padding: "0px 20px 0px 20px"}} className="fa fa-picture-o" aria-hidden="true"></i>
          </a>
          <a style={{color:'black'}} href={pic2} target="_blank">
            <i className="fa fa-picture-o" aria-hidden="true"></i>
          </a>
          </div>
        </div>
        <br/>
        <div className={`${css["contactDetailsRow"]} ${css["hidden-print"]}`} style={{justifyContent:'space-around'}}>
          <div><a className={css["socialLink"]} href="https://www.facebook.com/Dexter099" rel="noopener" target="_blank"><i className="fa-lg fa fa-facebook" aria-hidden="true"></i></a></div>
          <div><a className={css["socialLink"]} href="https://www.instagram.com/devarsh_099/" rel="noopener" target="_blank"><i className="fa-lg fa fa-instagram" aria-hidden="true"></i></a></div>
          <div><a className={css["socialLink"]} href="https://twitter.com/_devarsh" rel="noopener" target="_blank"><i className="fa-lg fa fa-twitter" aria-hidden="true"></i></a></div>
        </div>
      </div>
    );
  }
}
