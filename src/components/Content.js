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
                I'm a software developer, currently working at my our family firm,
                where I help managing day in day out activities.
                I'm tech savvy and love to stay at the edge of technology.
                When I'm not working you can find me reading and exploring.
                I'm huge fan of movies and sitcoms, and a food junkie.
                I've wide
              </div>
          </li>
          <li>
            <div className={css["header"]}>Hobbies</div>
            <div className={css["col"]}>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>1995-2007</b>
                </div>
                <div className={css["text"]}>
                  NR School
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={css["header"]}>Education</div>
            <div className={css["col"]}>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>1995-2007</b>
                </div>
                <div className={css["text"]}>
                  Schooling <br/>
                  NR School
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>2007-2010</b>
                </div>
                <div className={css["text"]}>
                  Bachelor of Computer Application <br/>
                  Somlalit Institue
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>2010-2013</b>
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
                  AcuteInformatics Pvt Ltd<br/>(Director) <br/>
                  Veb Robomak Pvt Ltd <br/>(Director)
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Mother</b><br/>
                  Occupation
                </div>
                <div className={css["text"]}>
                  Ashini Shah<br/>
                  Homemaker
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Sister</b><br/>
                  Occupation
                </div>
                <div className={css["text"]}>
                  Dvija Shah<br/>
                  Undergradate <br/>(Computer Engineering)
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
