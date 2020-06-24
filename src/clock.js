import React from 'react'

class Clock extends React.Component{
	constructor(props){
		super(props);
	this.state={date:new Date()};

	}


	

	componemtDidMount(){
		this.intervalID=setInterval(
			()=> this.tick(), 1000
			);

	}

	componentWillUnmount(){
		clearInterval(this.intervalID);

	}

	tick(){
		this.setState({
			date: new Date()
		});
	}
	

	render(){
		return(
			<div>
			<h3> It is {this.state.date.toLocaleTimeString()}</h3>
			</div>
			);
	}

}
 


export default Clock 