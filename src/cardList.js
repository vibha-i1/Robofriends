import React from 'react'
import Friends from './friends'
import Card from './cards'

const CardList=({Friends})=>{
const CardComponent=Friends.map((user,i)=> {
   return(
<Card key={i} id={Friends[i].id} name= {Friends[i].name} email={Friends[i].email}/>

)
})
   
   return(
   	<div>
   	{CardComponent}
   	</div>
   	);
}

  
		


		
	

		

		
		
export default CardList;
