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
	const [guessesArray, setGuessesArray] = useState([])
	useEffect(() => {
		setGuessesArray(guesses)
		console.log(guesses)
	}, [guesses]);
	return (
		<div className="h-2/3 w-full border-2 flex flex-col">
			{guessesArray?.map((row, i) => {
				return <GuessRow row={row} key={i}/>
			})}
			<button onClick={() => submitLetter("t")}>Test</button>
			<button onClick={() => submitGuess()}>Test</button>
		</div>
	);
};

export default GuessesContainer;