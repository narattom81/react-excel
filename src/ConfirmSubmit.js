import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

  export class ConfirmSubmit extends Component{
    // constructor(props) {
    //     super(props);
    //     this.callback = this.callback.bind(this);
    //     this.submit = this.submit.bind(this);
    //     this.state={}
    // }
    // callback = () => {
    //     this.props.callback()
    // }
    submit=()=>{
        const options = {
            title: 'Confirm To Submit',
            message: 'Are you sure to do this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.props.callback(this.props.data)
              },
              {
                label: 'No',
              }
            ],
          }
        confirmAlert(options);
    }

    render(){
        return(
            <div className="container">
                <button onClick={this.submit}>Confirm dialog</button>
            </div>
        )
    }

  }