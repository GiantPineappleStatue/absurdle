import React      from 'react';
import GuessBlock from "@/components/GuessBlock";
const GuessRow = ({row}) => {
//	console.log(row)
	return (
		<li className="flex space-x-2 m-auto">
			{row.map((block, i)=> {
				return <GuessBlock block={block} key={i} />
			})}
		</li>
	);
};

export default GuessRow;