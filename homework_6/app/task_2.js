class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    newEntry(word, value) {
        if (word && value) {
            this.dictionary[word] = value;
        } 
    }
    look(word) {
        if(this.dictionary[word]) {
            return this.dictionary[word];
        } else {
            return `Can't find entry for ${word}`;
        }
    }
}


