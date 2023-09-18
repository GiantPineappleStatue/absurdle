import GuessRow   from "@/components/GuessRow";
import {useStore} from "@/store/appStore";
import {
	useEffect,
	useState
}                 from "react";

const GuessesContainer = () => {
	const guesses = useStore((state) => state.guesses)
	const submitLetter = useStore((state) => state?.submitLetter)
	const submitGuess = useStore((state) => state?.submitGuess)
	const gameWon = useStore((state) => state.gameWon)
	return (
		<div className="h-2/3 w-full border-2 flex flex-col">
			{guesses.map((row, i) => {
				return <GuessRow row={row} key={i}/>
			})}
		</div>
	);
};

export default GuessesContainer;