import { create } from 'zustand'

const initialStore = {currentGuess: [],
	answer:"",
	guessedLetters: "",
	guessCount: 0,
	gameStarted: false,
	gameWon:false,
	guesses: Array(6).fill(Array(5).fill({ guess: "", status: null })),}
export const useStore = create((set, get) => ({
	...initialStore,
	reset: () => {
		set(initialStore)
	},
	startGame: async () => {
		await get().setAnswer();
set({
	    gameStarted: true
    })
	},
	setAnswer: () => {
		const bank = get().wordBank
		const randomIndex = Math.floor(Math.random() * bank.length);
		set({
			    answer: bank[randomIndex]
		    })
		console.log(get().answer)

	},
	submitLetter: (letter) => {
		if (letter.length !== 1) return;
		if (get().currentGuess.length === 5) {
			alert("You're not suppose to see this")
			return
		}

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
					guesses: newGuesses,
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
				guesses: newGuesses,
				guessedLetters: state.guessedLetters.slice(0, -1)
			};
		});
	},
	submitGuess: async () => {
		const answer= get().answer
		const guessRow = get().currentGuess
		if (guessRow.length < 5) {
			alert("Enter something first")
			return
		}
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

		set(state => {
			const updatedGuesses = [...state.guesses]
			updatedGuesses[state.guessCount] = updatedRow
			return {
				guesses: updatedGuesses,
				guessCount: state.guessCount + 1,
				currentGuess:[],
				gameWon: state.currentGuess.every(item => item.status !== "close" && item.status !== "wrong")
			};
		});
	},
	wordBank: [
		"SILLY",
		"LOONY",
		"ZANY",
		"WACKY",
		"KOOKY",
		"GOOFY",
		"DIZZY",
		"NUTTY",
		"FUNNY",
		"WITTY",
		"WONKY",
		"BATTY",
		"DOTTY",
		"KINKY",
		"QUIRK",
		"TWIST",
		"BUMPY",
		"DROLL",
		"FREAK",
		"JUMPY"
	]
}))