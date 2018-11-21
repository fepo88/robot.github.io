import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
			 className='pa3 ba b--green bg-ligthtest-blue'
			 type='seach'
			 placeholders='search robots'
			 onChange={searchChange}/>
		 </div>
		);
}

export default SearchBox;