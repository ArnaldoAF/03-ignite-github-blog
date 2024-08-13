export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const dateString = (date: string) =>
  dateFormatter.format(new Date(date));
