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
              <p>
              My job keeps me at pace with the changing technology landscape. I value good sense of humor and understanding in a person.
              </p>
              </div>
          </li>
          <li>
            <div className={css["header"]}>Hobbies</div>
            <div className={css["col"]} style={{textAlign: 'justify'}}>
              Reading, traveling, watching movies & sitcoms, swimming.
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
                <a href="http://www.acuteinformatics.co.in/">Acute Informatics Pvt Ltd</a> <br/>
                  Owner <br/>
                  Veb Robomak Pvt Ltd <br/>
                  Owner <br/>
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>2017-Now</b><br/>
                  Role
                </div>
                <div className={css["text"]}>
                  Shrenik Limited <br/>
                  Independent Director <br/>
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
                  Acute Informatics Pvt Ltd<br/>(Director) <br/>
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
          <li>
             <div className={css["header"]}>Paternal Family</div>
             <div className={css["col"]}>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Grandfather</b><br/>
                </div>
                <div className={css["text"]}>
                  Lt. Sashikant M. Shah<br/>
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Grandmother</b><br/>
                </div>
                <div className={css["text"]}>
                  Lt. Ushaben S. Shah
                </div>
              </div>
            </div>
          </li>
          <li>
             <div className={css["header"]}>Maternal Family</div>
             <div className={css["col"]}>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Grandfather</b><br/>
                </div>
                <div className={css["text"]}>
                  Sureshbhai B. Mehta
                  <br/>
                </div>
              </div>
              <div className={css["row"]}>
                <div className={css["label"]}>
                  <b>Grandmother</b><br/>
                </div>
                <div className={css["text"]}>
                  Veenaben S. Mehta
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
