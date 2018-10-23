import { format } from 'date-fns';

export class FullDateFormatValueConverter {
  toView(value) {
    return format(value, 'MMMM DD, YYYY, HH:mm A');
  }
}
