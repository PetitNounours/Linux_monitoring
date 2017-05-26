import React, { Component } from 'react';

export default class Chill extends Component {
  constructor(props) {
    super(props);
		this.state = {
			dtc: undefined
	   }
   }

   _fetchData() {
     const url = `http://127.0.0.1:4000/api/chill`;
		 fetch(url)
			.then(response => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.text(); //JSON.parse() si json peut etre
			})
			.then(data => {
				this.setState({dtc: data});
			})
			.catch(error => {console.error(error)});
	}

  componentDidMount() {
		this._fetchData();
		// this.test = setInterval(() => this._fetchData(), 5000);
	}

  render() {
		return (
			<div>
				{
					this.state.dtc ? (
						<div style={{display: "flex", flexDirection: "column"}}>
							{this.state.dtc}
						</div>
					) : (
						<div>Loading...</div>
					)
				}
			</div>
		)
	}
}
