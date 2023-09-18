import {useStore} from "@/store/appStore";
import React      from 'react';
import Keyboard   from "@/components/Keyboard";
const KeyboardContainer = () => {
	const submitLetter = useStore((state) => state?.submitLetter)
	const gameStarted = useStore((state) => state?.gameStarted)
	const gameWon = useStore((state) => state?.gameWon)
	const startGame = useStore((state) => state?.startGame)
	const reset = useStore((state) => state?.reset)
	const guessCount = useStore((state) => state?.guessCount)

	if(guessCount > 5) {
		return (<>
			<div className="m-auto">You Lost</div>
		<button className="mx-auto mb-auto border rounded p-1 hover:bg-gray-400" onClick={reset}>Restart Game</button>
			</>
	)
	}

	if (gameStarted === false) {
		return (
			<div className="h-full w-full flex">
				<button className="m-auto border rounded p-1" onClick={startGame}>Start Absurdle</button>
			</div>
		)
	}
	if (gameWon === true) {
		return (
			<div className="h-full w-full flex flex-col">
				<div className="mx-auto mt-auto">You won!</div>
				<button className="mx-auto mb-auto border rounded p-1 hover:bg-gray-400" onClick={reset}>Restart Game</button>
			</div>
		)
	}

	return (
		<div>
			<Keyboard submitLetter={submitLetter} />
			<button className="border rounded p-1 bg-red-800">Reset</button>
		</div>
	);
};

export default KeyboardContainer;