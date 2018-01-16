import React, {Component} from 'react';


class InputLastName extends Component {
  render() {
    return(

      <div>
        <label >Last name</label>
          <input
              type="text"
              className="form-control"
              placeholder=" Enter last name"
              onChange={e =>
                this.props.handleChangeInput(e, 'LASTNAME')
              }
            />
      </div>
    )
  }
}

export default InputLastName;
