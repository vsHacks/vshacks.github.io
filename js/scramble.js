class TextScrambler {
    constructor(el, { scrambleInterval, unscrambleDelay, duration }) {
        this._el = el;
        this._scrambleInterval = scrambleInterval;
        this._unscrambleDelay = unscrambleDelay;
        this._duration = duration;
        this._unscrambled = 0;
        this._originalText = el.textContent;
    }

    /**
     * Starts the animation. Scrambling will commence immediately,
     * while unscrambling will start after `unscrambleDelay`.
     */
    start() {
        setTimeout(() => {
            this._unscrambleTimer = setInterval(
                () => this._unscrambleOne(),
                (this._duration - this._unscrambleDelay) / this._textLength,
            );
            this._unscrambleOne();
        }, this._unscrambleDelay);

        const scrambleTimer = setInterval(() => this._doScramble(), this._scrambleInterval);
        this._doScramble();
        setTimeout(() => clearInterval(scrambleTimer), this._duration);
    }

    /**
     * Scrambles the text once, leaving previously unscrambled characters unaffected.
     */
    _doScramble() {
        let scrambledText = this._originalText.slice(0, this._unscrambled);
        while (scrambledText.length < this._textLength) {
            // The ASCII charset spans from 0 to 128. Characters below 32 are control characters,
            // as is character 127; 128 is an accentated character. That leaves characters 32
            // through 126 as valid candidates for output characters.
            scrambledText += String.fromCharCode(randomInt(32, 126));
        }
        this._el.textContent = scrambledText;
    }

    /**
     * Unscrambles one character from the start of the original text.
     * The affected character will not be scrambled again.
     */
    _unscrambleOne() {
        if (this._unscrambled >= this._textLength) return clearInterval(this._unscrambleTimer);
        this._unscrambled++;
        this._el.textContent = this._originalText.slice(0, this._unscrambled)
            + this._el.textContent.slice(this._unscrambled);
    }

    /**
     * Returns the length of the text to scramble.
     */
    get _textLength() {
        return this._originalText.length;
    }
}

/**
 * Generates a random integer between `lo` and `hi`, inclusive.
 */
function randomInt(lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

const headerTitle = document.getElementById('header-title');
const scrambler = new TextScrambler(headerTitle, {
    scrambleInterval: 50,
    unscrambleDelay: 300,
    duration: 1500,
});
scrambler.start();
