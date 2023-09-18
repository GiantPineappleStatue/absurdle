import React      from 'react';
import {useStore} from "@/store/appStore";

const qwertyRows = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

const Keyboard = ({submitLetter}) => {
	const currentGuess = useStore((state) => state?.currentGuess)
	const guessedLetters = useStore((state) => state?.guessedLetters)
	const removeLetter = useStore((state) => state?.removeLetter)
	const submitGuess = useStore((state) => state?.submitGuess)
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="flex flex-col space-y-2">
				{qwertyRows.map((row, i) => {
					return (
						<div className="flex flex-row space-x-2 justify-center" key={i}>
							{row.map((key, k) => {
								return (
									<button
										className={`px-2 py-1 border rounded hover:bg-gray-400 ${currentGuess.length === 5 || guessedLetters.includes(key) ? `bg-red-800 hover:bg-red-800` : ""}`}
										key={k}
										onClick={() => submitLetter(key)}
										disabled={currentGuess.length === 5 || guessedLetters.includes(key)}
									>
										{key}
									</button>
								);
							})}
						</div>
					);
				})}
			</div>
			<div className="py-1">
				<button
					className={`px-2 py-1 w-40 border rounded hover:bg-gray-400`}
					onClick={submitGuess}
				>Enter</button>
				<button
					className={`px-2 py-1 border rounded hover:bg-gray-400 ${currentGuess.length === 0 && "bg-red-800 hover:bg-red-800"}`}
					onClick={removeLetter}
					disabled={currentGuess.length === 0}
				>Del</button>
			</div>
		</div>
	);
};

export default Keyboard;