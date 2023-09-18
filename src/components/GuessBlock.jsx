import React, {useEffect} from 'react';

const GuessBlock = ({block}) => {

	return (
		<div className="w-14 h-14 flex items-center justify-center font-bold rounded border-2 border-pink-800 text-white">
			{block.guess}
		</div>
	);
};

export default GuessBlock;