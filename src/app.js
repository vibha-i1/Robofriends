import React, {Component} from 'react';
import CardList from './cardList';
import Friends from './friends';
import SearchBox from'./SearchBox';




 class App extends Component{
 	constructor(){
 		super()
 		this.state={
 		Friends: Friends,
		searchfield:''

 		}
 	}

 	onSearchChange=(event)=>{
 		this.setState({searchfield:event.target.value})
 		
 }
 	render(){
 		const filteredFriends=this.state.Friends.filter((Friends)=>{
 			return Friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
 		})
 		
 		return(
 		<div className= 'tc'>
	<h1> RoboFriends </h1>
	<SearchBox searchChange={this.onSearchChange}/>
<CardList Friends={filteredFriends}/>
 

 </div>
 		);
 }

 	}
 

export default App;