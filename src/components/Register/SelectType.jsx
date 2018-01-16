import React, {Component} from 'react';


class SelectType extends Component {
  render() {
    return(

      <div>
        <label>Type</label>
        <select
          className="form-control select-group"
          onChange={e =>
            this.props.handleChangeInput(e, 'SELECTTYPE')}>
            <option>Tester</option>
            <option>Paid</option>
        </select>
      </div>
    )
  }
}

export default SelectType;
