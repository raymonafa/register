import React, {Component} from 'react';


class InputEmail extends Component {
  render() {
    return(

      <div>
        <label>Email</label>
          <input
              type="Email"
              className="form-control"
              placeholder=" Enter Email"
              onChange={e =>
                this.props.handleChangeInput(e, 'EMAIL')
            }
          />
      </div>
    )
  }
}

export default InputEmail;
