import React, {Component} from 'react';


class InputConfirmationPassword extends Component {
  render() {
    return(

      <div>
        <label>Password Confirm</label>
          <input
              type="password"
              className="form-control"
              placeholder=" "
              onChange={e =>
                this.props.handleChangeInput(e, 'CONFIRMPASSWORD')
              }
            />
      </div>
    )
  }
}

export default InputConfirmationPassword;
