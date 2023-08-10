export const transliterate = (word) =>  {
	const converter = {
        a: "а",
        b: "б",
        v: "в",
        g: "г",
        d: "д",
        e: "е",
        yo: "ё",
        zh: "ж",
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
        kh: "х",
        ts: "ц",
        ch: "ч",
        sh: "ш",
        sch: "щ",
        "": "",
        y: "ы",
        "": "",
        e: "э",
        yu: "ю",
        ya: "я",
        "-": " "
	};

	if (word.indexOf("-") >= 0) {

		word = word.toLowerCase();
		//word = word.replace(/-/g, ' ');
		//word = word.replace("*", '');

		for (const [key, value] of Object.entries(converter)) {
			word = word.replaceAll(key, value);
		}

		return word;

	} else {
		word = word.toLowerCase();
		return word;
	}
}
