import React, { Component } from 'react';

export default class Cmd extends Component {
  constructor(props) {
    super(props);
		this.state = {
			dataAPI: undefined
	   }
   }

   _fetchData() {
    //  const url = `http://flask:8089/api/cmd${this.props.process}`;  //PROD
     const url = `http://127.0.0.1:4000/api/cmd${this.props.process}`;      //DEV
		 fetch(url)
			.then(response => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.text(); //JSON.parse() si json peut etre
			})
			.then(data => {
				this.setState({dataAPI: data});
			})
			.catch(error => {console.error(error)});
	}

  componentDidMount() {
		// this._fetchData();
		this.test = setInterval(() => this._fetchData(), 5000);
	}

  render() {
		return (
			<div className="box">
        <div className="column">
				{
					this.state.dataAPI ? (
						<div style={{display: "flex", flexDirection: "column"}}>
							{this.state.dataAPI.split("\n").map(row => <div>{row}</div>)}
						</div>
					) : (
						<div>Loading...</div>
					)
				}
        </div>
			</div>
		)
	}
}
