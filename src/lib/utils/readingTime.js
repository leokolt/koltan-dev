import { plural } from "./pluralWord";

export function readingTime(content) {
    const wordsPerMinute = 200;
    const words = countWords(content);
    const minutes = Math.ceil(words / wordsPerMinute);

    return `${plural((minutes), 'минута', 'минуты', 'минут')} на чтение`;
}

function countWords(content) {
    const trimmedContent = content.trim();
    const words = trimmedContent.split(/\s+/);
    return words.length;
}
