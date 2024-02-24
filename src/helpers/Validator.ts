class Validator {
  static isEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  static isPhone(phone: string): boolean {
    return /^\d{10}$/.test(phone);
  }
  static isCorrectName(pName: string): { message: string; condition: boolean } {
    const msg =
      pName.length < 2
        ? 'should be at least 2 characters long.'
        : /^[a-zA-Z]+$/.test(pName)
          ? 'valid!'
          : 'can only contain letters';

    if (msg === 'valid!') {
      return { message: msg, condition: true };
    }
    return { message: msg, condition: false };
    // return pName.length >= 2 && /^[a-zA-Z]+$/.test(pName);
  }

  static isMoreThanTwo(pName: string): boolean {
    return pName.length >= 2;
  }

  static isMoreThanTen(pName: string): boolean {
    return pName.length >= 10;
  }
}

export default Validator;
