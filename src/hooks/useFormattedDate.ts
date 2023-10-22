import { parseISO, format } from 'date-fns';

export const useFormattedDate = (
  dateString: string,
  formatString: string = 'yyyy/MM/dd',
): string => {
  const date = parseISO(dateString);
  return format(date, formatString);
};
