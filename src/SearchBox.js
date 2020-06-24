import React from 'react';

const SearchBox = ({searchfield, searchChange})=> {
	return(
		<div className= "pa2 ba-white">
		<input type='search' 
		placeholder='search robots'
		onChange={searchChange}
		/> 


		</div>
		
		);
}

export default SearchBox