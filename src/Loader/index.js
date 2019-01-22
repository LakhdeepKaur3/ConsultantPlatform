import React, {Component} from 'react';

import './loader.css';

/* in this component we can show loading gif */

class Loading extends Component {
	render() {
		// inline css for cursor
		const style = {
			"cursor":"progress",
		};
		return(
			<div className='laoder'>
				<div className='imageContainer'>
					<i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true"></i>
				</div>
			</div>
		)
	}
}

export default Loading;