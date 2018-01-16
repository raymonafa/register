import React, {Component} from 'react';
import {legend, fieldset, form} from 'react-bootstrap';
import './../css/style.css';
import axios from 'axios'
// import ReactDOM from 'react-dom';

import InputFirstName from './../components/Register/InputFirstName.jsx';
import InputLastName from './../components/Register/InputLastName.jsx';
import InputUsername from './../components/Register/InputUsername.jsx';
import InputEmail from './../components/Register/InputEmail.jsx';
import InputPassword from './../components/Register/InputPassword.jsx';
import InputConfirmationPassword from './../components/Register/InputConfirmationPassword.jsx';
import SelectPeriod from './../components/Register/SelectPeriod.jsx';
import SelectTimeZone from './../components/Register/SelectTimeZone.jsx';
import SelectType from './../components/Register/SelectType.jsx';

// const postHeader = {
//   'Content-Type': 'multipart/form-data',
// }


class Register extends Component{

  constructor(props) {
    super(props)
    this.state = {
      //object
      firstname: '',
      firstNameError: '',
      lastname: '',
      lastNameError: '',
      username: '',
      usernameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      confirmpassword:'',
      confirmPasswordError: '',

      //select input
      selectperiod: '',
      selecttimezone: '',
      selecttype: '',

      //error mesage object
      errorMessage: '',
      errorStatus: '',
      errorHtml: '',
    }

    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
  }


  //ini untuk handle button Register
  handleSubmitRegister(e){
    e.preventDefault()

      if (this.state.firstname != ""){
        console.log('isi true')
      } else {
        alert("oops kosong");
        // let html = (
  			// 	<v className="alert alert-danger" role="alert">
  			// 		Error, {this.state.firstNameError}
  			// 	</div>
      }

    // this.requestUserAuth()
  }


  //request user auth
  async requestUserAuth(){
    const url = ''

    let form = new FormData()

    form.append('firstname', this.state.firstname)
    form.append('lastname', this.state.lastname)
    form.append('username', this.state.username)
    form.append('email', this.state.email)
    form.append('password', this.state.password)
    form.append('confirmpassword', this.state.confirmpassword)
    form.append('selectperiod', this.state.selectperiod)
    form.append('selecttimezone', this.state.selecttimezone)
    form.append('selecttype', this.state.selecttype)

    const response= await axios.post(url, form)

    if (response.data.error === 0) {
        this.setState({
          errorStatus: response.data.error,
        })
    } else {
      let html =(
        <div className="alert alert-danger" role="alert">
					Error, {this.state.errorMessage}
				</div>
      )

      this.setState({
				errorStatus: response.data.error,
				errorMessage: response.data.message,
				errorHtml: html,
			})

    }
  }

  handleChangeInput(e, type){
    switch (type) {
      case 'FIRSTNAME':
        this.setState({
          firstname: e.target.value.trim(),
        })
        break

      case 'LASTNAME':
        this.setState({
          lastname: e.target.value.trim(),
        })
        break

      case 'USERNAME':
      this.setState({
        username: e.target.value.trim(),
      })
      break

      case 'EMAIL':
      this.setState({
        email: e.target.value.trim(),
      })
      break

      case 'PASSWORD':
      this.setState({
        password: e.target.value.trim(),
      })
      break

      case 'CONFIRMPASSWORD':
      this.setState({
        confirmpassword: e.target.value.trim(),
      })
      break

      case 'SELECTPERIOD':
      this.setState({
        selectperiod: e.target.value.trim(),
      })
      break

      case 'SELECTTIMEZONE':
      this.setState({
        selecttimezone: e.target.value.trim(),
      })
        break

      case 'SELECTTYPE':
      this.setState({
        selecttype: e.target.value.trim(),
      })
        break

        default:
        break
    }
  }




  render(){
    return(
      <div className="container h-100 center_div ">
				<div className="row h-100 justify-content-center align-items-center col">
					<div className="col-sm-6 col-md-4 col-md-offset-4">

            <h3> Register </h3>
              <fieldset>

                <div className="form-group ">
                  <InputFirstName
                    handleChangeInput={
                      this.handleChangeInput
                    } />
                  <p></p>
                </div>

                <div className="form-group  ">
                  <InputLastName
                    handleChangeInput={
                      this.handleChangeInput
                    } />
                </div>

                <div className="form-group  ">
                  <InputUsername
                    handleChangeInput={
                      this.handleChangeInput
                    } />
                </div>

                <div className="form-group  ">
                  <InputEmail
                    handleChangeInput={
                      this.handleChangeInput
                    } />
                </div>

                <div className="form-group  ">
                  <InputPassword
                    handleChangeInput={
                      this.handleChangeInput
                    } />
                </div>

                <div className="form-group  ">
                  <InputConfirmationPassword
                    handleChangeInput={
                      this.handleChangeInput
                    } />
                </div>

                <div className="form-group">
                <SelectPeriod
                  handleChangeInput={
                    this.handleChangeInput
                  } />
                </div>

                <div className="form-group">
                <SelectTimeZone
                  handleChangeInput={
                    this.handleChangeInput
                  } />
                </div>

                <div className="form-group">
                <SelectType
                  handleChangeInput={
                    this.handleChangeInput
                  } />
                </div>
            </fieldset>

             <button
               className="btn btn-success"
               onClick={this.handleSubmitRegister}
              >
                Register
            </button>

        </div>
      </div>
    </div>
    );
  }
}

export default Register;
