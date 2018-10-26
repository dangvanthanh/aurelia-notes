export class TitleFormatValueConverter {
  toView(body) {
    const maxLength = 20;
    const length = body.length;

    if (length === 0) {
      return 'New Note';
    }

    if (length > maxLength) {
      return body.substr(0, maxLength - 3) + '...';
    }

    return body;
  }
}
