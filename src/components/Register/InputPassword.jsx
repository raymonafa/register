import React, {Component} from 'react';


class InputPassword extends Component {
  render() {
    return(

      <div>
        <label>Password</label>
          <input
              type="password"
              className="form-control"
              placeholder=" Enter Password"
              onChange={e =>
              this.props.handleChangeInput(e, 'PASSWORD')
            }
          />
      </div>
    )
  }
}

export default InputPassword;
