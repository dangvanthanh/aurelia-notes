export class TitleFormatValueConverter {
  toView(value) {
    const maxLength = 20;

    if (!value) {
      return 'New Note';
    }

    const length = value.length;

    if (length > maxLength) {
      return value.substr(0, maxLength - 3) + '...';
    }

    return value;
  }
}
