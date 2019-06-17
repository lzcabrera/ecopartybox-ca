import React from 'react';

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates';

class Calendar extends React.Component {

    state = {
      errorMessages: [],
      startDate: null,
      endDate: null,
      focusedInput: null
    }

    _onDateChange = ({ startDate, endDate }) => {
      this.setState({ startDate, endDate })
    }

    _onFocusChange = (focusedInput) => {
      this.setState({
        focusedInput: !focusedInput ? this.state.startDate : focusedInput
      });
    }

    render() {
        const {
            startDate,
            endDate,
            focusedInput
        } = this.state

        return (
            <DateRangePicker
                startDate={startDate}
                startDatePlaceholderText="Pick up"
                startDateId="date_id_start"
                endDate={endDate}
                endDatePlaceholderText= "Drop off"
                endDateId="date_id_end"
                onDatesChange={ this._onDateChange }
                focusedInput={ focusedInput }
                onFocusChange={this._onFocusChange}
                showDefaultInputIcon
                inputIconPosition="before"
                numberOfMonths={2}
            />
        )
    }
}

export default Calendar;
