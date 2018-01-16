import React, {Component} from 'react';


class InputFirstName extends Component {
  render() {
    return(

      <div>
        <label >First name</label>
          <input
              type="text"
              className="form-control"
              placeholder=" Enter first name"
              onChange={e =>
              this.props.handleChangeInput(e, 'FIRSTNAME')}
          />
      </div>
    )
  }
}

export default InputFirstName;
