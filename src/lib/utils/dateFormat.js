// @ts-nocheck

export function dateFormat(date, dateStyle = "medium", locales = "ru") {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return formatter.format(new Date(date))
  }
