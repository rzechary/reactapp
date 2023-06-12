import React, { Component } from 'react'

export default class ViewDate extends Component {
  state = {days: 999}

  // מיטודה שפועלת פעם אחת לאחר שהקומפ מופיע
  // שם שמור!!!!!!
  componentDidMount(){
    console.log("comp mount like init 111111111");
    this.calcDays(this.props.deadline1);
  }
  // יופעל כל פעם שיש עדכון בסטייטי כלשהו בקומפ
  // או בפרופ שמגיע מהאבא
  // _oldProps -> מכיל את הפרופס רגע לפני השנוי של הפרופס
  // _oldState -> מכיל את הסטייט רגע לפני השינוי של הסטייט
  componentDidUpdate(_oldPros,_oldState){
    console.log("comp update by state or props");
    // בודק שהפרופס רגע לפני השינוי שונה מהפרופס הנוכחי
    // ורק אז מפעיל את הפונקציה שגם משנה את הסטייט כדי להמנע
    // מלולאה אין סופית
    if(_oldPros.deadline1 != this.props.deadline1){
      console.log(_oldPros,this.props);
      this.calcDays(this.props.deadline1);
    }
  }

  calcDays = (_newDate) => {
    // Date.parese -> מתרגם תאריך לזמן יוניקס
    let time = Date.parse(_newDate) - Date.now();
    // 1000 -> מייצג אלפית שניה
    // 60 -> 60 שניות בדקה
    // 60 -> 60 דקות בשעה
    //24 -> 24 שעות ביממה
    let newDays = Math.floor(time/(1000 * 60 * 60 * 24))
    this.setState({days:newDays});
  }

  render() {
    return (
      <div className='text-center'>
        <h2>Countdown to: {this.props.deadline1}</h2>
        <h3>Days: {this.state.days}</h3>
      </div>
    )
  }
}