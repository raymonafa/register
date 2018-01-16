import React, {Component} from 'react';


class InputUsername extends Component {
  render() {
    return(

      <div>
        <label >Username</label>
          <input
              type="text"
              className="form-control"
              placeholder=" Enter Username"
              onChange={e =>
                this.props.handleChangeInput(e, 'USERNAME')
              }
            />
      </div>
    )
  }
}

export default InputUsername;
