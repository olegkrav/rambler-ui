import React, {Component} from 'react'
import Calendar from 'rambler-ui/Calendar'

export default class CalendarExample extends Component {
  state = {
    today: new Date(2018, 5, 15),
    dateFrom: null,
    dateTo: null
  }

  onChangeRange = (event, [dateFrom, dateTo]) => {
    this.setState({
      dateFrom,
      dateTo
    })
  }

  onChangeNotRange = (event, dateFrom) => {
    this.setState({
      dateFrom,
      dateTo: null
    })
  }

  render() {
    const {today, dateFrom, dateTo} = this.state

    return (
      <div>
        <div>
          <Calendar
            visibleMonths={2}
            value={[dateFrom, dateTo]}
            today={today}
            maxDate={new Date(2018, 5, 15)}
            range
            onChange={this.onChangeRange}
          />
        </div>

        <Calendar
          value={[dateFrom, dateTo]}
          today={today}
          range
          onChange={this.onChangeRange}
        />

        <Calendar
          variation="media"
          value={dateFrom}
          today={today}
          onChange={this.onChangeNotRange}
        />

        <Calendar
          minDate={new Date(2018, 5, 5)}
          maxDate={new Date(2018, 6, 5)}
          value={dateFrom}
          today={today}
          onChange={this.onChangeNotRange}
        />

        <Calendar
          initDate={dateFrom || new Date(2018, 0)}
          showMonthSwitch={false}
          showYear={false}
          highlightWeekend={true}
        />
      </div>
    )
  }
}
