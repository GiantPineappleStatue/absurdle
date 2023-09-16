import { create } from 'zustand'

export const useStore = create((set, get) => ({
	currentGuess: [{guess:"i"},{guess:"n"},{guess:"a"},{guess:"n"},{guess:"e"}],
	guessedLetters: "",
	guessCount: 0,
	guesses: Array(6).fill(Array(5).fill({ guess: "", status: null })),
	submitLetter: (letter) => {
		if (get().currentGuess.length === 5) {
			alert("You're not suppose to see this")
			return
		}
		if (letter.length !== 1) return;

		set(state => {
			const row = state.guessCount;
			const position = state.currentGuess.length;

			if (position < 5) {
				const newGuesses = state.guesses.map((r, rowIndex) => {
					if (rowIndex !== row) return r;

					return r.map((item, itemIndex) => {
						if (itemIndex !== position) return item;
						return { ...item, guess: letter };
					});
				});

				const newCurrentGuess = state.currentGuess + letter;
				const newGuessedLetters = state.guessedLetters + letter;

				return {
					currentGuess: newCurrentGuess,
					guessedLetters: newGuessedLetters,
					guesses: newGuesses
				};
			}
		});
	},
	removeLetter: () => {
		if (get().currentGuess.length === 0) {
			alert("Input something first")
			return
		}
		set(state => {
			const row = state.guessCount;
			const position = state.currentGuess.length - 1;

			if (position < 0) return;

			const newGuesses = state.guesses.map((r, rowIndex) => {
				if (rowIndex !== row) return r;

				return r.map((item, itemIndex) => {
					if (itemIndex !== position) return item;
					return { guess: "", status: null };
				});
			});

			const newCurrentGuess = state.currentGuess.slice(0, -1);

			return {
				currentGuess: newCurrentGuess,
				guesses: newGuesses
			};
		});
	}
	,
	submitGuess: async () => {
		const answer = "inane"
		const guessRow = get().currentGuess
		const updatedRow =  guessRow.map((item, index) => {
			const guessLetter = item.guess;
			if (guessLetter === answer[index]) {
				return { ...item, status: "correct" };
			} else if (answer.includes(guessLetter)) {
				return { ...item, status: "close" };
			} else {
				return { ...item, status: "wrong" };
			}
		});

//		console.log(updatedRow)
		set(state => {
			let updatedGuesses = state.guesses
			updatedGuesses[state.guessCount] = updatedRow
			console.log(updatedGuesses)
			return {
				guesses: updatedGuesses,
				guessCount: state.guessCount + 1
			};
		});
	},
	wordBank: [
		"silly",
		"loony",
		"zany",
		"wacky",
		"kooky",
		"goofy",
		"dizzy",
		"nutty",
		"funny",
		"witty",
		"wonky",
		"batty",
		"dotty",
		"kinky",
		"quirk",
		"twist",
		"bumpy",
		"droll",
		"freak",
		"jumpy"
	]
}))