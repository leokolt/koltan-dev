// функция для склонения слов (значение, (1)"день", (2)"дня", (5)"дней")
export const plural = (n,str1,str2,str5) => {
    return n + ' ' + ((((n % 10) == 1) && ((n % 100) != 11)) ? (str1) :
        (((((n % 10)>=2) && ((n % 10)<=4)) && (((n % 100)<10) || ((n % 100) >= 20)))
        ? (str2)
        : (str5)))}
