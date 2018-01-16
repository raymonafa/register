import React, {Component} from 'react';


class SelectPeriod extends Component {
  render() {
    return(

      <div>
        <label>Period</label>
        <select
          className="form-control select-group"
            onChange={ e =>
            this.props.handleChangeInput(e, 'SELECTPERIOD')
          }>
            <option>1 Month</option>
            <option>2 Month</option>
            <option>3 Month</option>
            <option>4 Month</option>
        </select>
      </div>
    )
  }
}

export default SelectPeriod;
