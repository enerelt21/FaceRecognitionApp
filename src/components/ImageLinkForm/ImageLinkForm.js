import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) =>{
	return(
		<div className='ma4 mt0'>
			<p className='f3'>
				{'This Magic System will detect faces in your pictures'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center'type='tex' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green' onClick={onPictureSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;