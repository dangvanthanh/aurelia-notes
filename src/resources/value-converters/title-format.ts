export class TitleFormatValueConverter {
  toView(body) {
    const maxLength = 20;

    if (!body) {
      return 'New Note';
    }

    const length = body.length;

    if (length > maxLength) {
      return body.substr(0, maxLength - 3) + '...';
    }

    return body;
  }
}
