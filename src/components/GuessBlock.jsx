import React, {useEffect} from 'react';

const GuessBlock = ({block}) => {
	console.log(block.status === "correct")

	return (
		<div className={`${block.status === "correct" ? "bg-green-300 " : ""}
		${block.status === "close" ? "bg-yellow-300 " : ""}
		 w-14 h-14 flex items-center justify-center font-bold rounded border-2 border-pink-800 text-white`}>
			{block.guess}
		</div>
	);
};

export default GuessBlock;