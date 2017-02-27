import React, { Component } from 'react';
import css from './Content.css'

export class Content extends Component {
  render() {
    return (
      <div className={css["timeline"]}>
        <ul>
          <li>
            <div className={css["header"]}>About Me</div>
              <div className={css["col"]} style={{textAlign: 'justify'}}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              </div>
          </li>
          <li>
            <div className={css["header"]}>Education</div>
            <div className={css["col"]}>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>1991-2007</b>
                </div>
                <div className={css["text"]}>
                  Schooling <br/>
                  NR School
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>2008-2010</b>
                </div>
                <div className={css["text"]}>
                  Bachelor of Computer Application <br/>
                  Somlalit Institue
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>2011-2013</b>
                </div>
                <div className={css["text"]}>
                  Master of Computer Application <br/>
                  GLS ICT
                </div>
              </div>
            </div>
          </li>
          <li>
             <div className={css["header"]}>Work</div>
             <div className={css["col"]}>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>2013-Now</b><br/>
                  Role
                </div>
                <div className={css["text"]}>
                  AcuteInformatics Pvt Ltd <br/>
                  Database Administator
                </div>
              </div>
            </div>
          </li>
          <li>
             <div className={css["header"]}>Family</div>
             <div className={css["col"]}>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Father</b><br/>
                  Occupation
                </div>
                <div className={css["text"]}>
                  Muktesh Shah<br/>
                  AcuteInformatics Pvt Ltd(Director) <br/>
                  Veb Robomak Pvt Ltd (Director)
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Mother</b><br/>
                  Occupation
                </div>
                <div className={css["text"]}>
                  Ashini Shah<br/>
                  HouseWife
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Sister</b><br/>
                  Occupation
                </div>
                <div className={css["text"]}>
                  Dvija Shah<br/>
                  Undergrad (Computer Engineering)
                </div>
              </div>
            </div>
          </li>
          <li/>
        </ul>
      </div>
    );
  }
}
