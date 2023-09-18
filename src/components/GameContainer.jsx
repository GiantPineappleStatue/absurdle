import GuessBlock from "@/components/GuessBlock";
import GuessesContainer from "@/components/GuessesContainer";
import KeyboardContainer from "@/components/KeyboardContainer";

const GameContainer = () => {
	return (
		<div className="border-2 w-1/3 h-full m-auto flex flex-col">
			<GuessesContainer />
			<KeyboardContainer />
		</div>
	);
};

export default GameContainer;