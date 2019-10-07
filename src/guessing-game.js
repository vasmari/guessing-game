class GuessingGame {
    constructor() {
        this.minGuess;
        this.maxGuess;
        this.myGuess;

    }

    setRange(min, max) {
        this.minGuess = min;
        this.maxGuess = max;

    }

    guess() {
        this.myGuess = Math.round((this.maxGuess + this.minGuess)/2);
        return this.myGuess;

    }

    lower() {
        this.maxGuess = this.myGuess;

    }

    greater() {
        this.minGuess = this.myGuess;

    }
}

module.exports = GuessingGame;
