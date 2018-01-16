import React, {Component} from 'react';


class SelectTimeZone extends Component {
  render() {
    return(

      <div>
        <label>Timezone</label>
        <select
          className="form-control select-group"
          onChange={e =>
            this.props.handleChangeInput(e, 'SELECTTIMEZONE')}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    )
  }
}

export default SelectTimeZone;
