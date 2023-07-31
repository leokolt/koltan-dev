export const calculateTime = (startDate, otherDate) => {
    startDate = new Date(startDate);
    otherDate = new Date();

    var years = (otherDate.getFullYear() - startDate.getFullYear());

    if (otherDate.getMonth() < startDate.getMonth() ||
        otherDate.getMonth() == startDate.getMonth() && otherDate.getDate() < startDate.getDate()) {
        years--;
    }

    return years;
}
