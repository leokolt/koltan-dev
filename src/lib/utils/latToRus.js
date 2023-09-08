export const transliterate = (word) =>  {
	const converter = {
        yu: "ю",
        ya: "я",
        kh: "х",
        ch: "ч",
        sh: "ш",
        sch: "щ",
        yo: "ё",
        zh: "ж",
        ts: "ц",
        a: "а",
        b: "б",
        v: "в",
        g: "г",
        d: "д",
        z:" з",
        i: "и",
        y: "й",
        k: "к",
        l: "л",
        m: "м",
        n: "н",
        o: "о",
        p: "п",
        r: "р",
        s: "с",
        t: "т",
        u: "у",
        f: "ф",
        "": "",
        y: "и",
        "": "",
        e: "э",
        e: "е",
        "-": " ",


	};

    //const excludedWords = ["css", "svelte", "html", "o-zhope"];


	if (word.indexOf("-") >= 0) {
        //if(word === word.toUpperCase()) {

		word = word.toLowerCase();

        for (const [key, value] of Object.entries(converter)) {
            word = word.replaceAll(key, value);
        }

		return word;

	} else {
		word = word.toLowerCase();
		return word;
	}
}
