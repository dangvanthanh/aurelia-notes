import { format } from 'date-fns';

export class DateFormatValueConverter {
  toView(value) {
    return format(value, 'MM/DD/YYYY');
  }
}
