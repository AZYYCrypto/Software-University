class CheckingAccount {
  constructor(clientId,email,firstName,lastName) {
    this.clientId = clientId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get clientId() {
      return this._clientId;
  }

  set clientId(clientId) {
      let lengthValidation = clientId.length === 5;
      let numberValidation = Number.isInteger(Number(clientId));

      if (lengthValidation && numberValidation) {
        this._clientId = clientId;
      } else {
          throw new TypeError('Client ID must be a 5-digit number');

      }
  }

  set email(value) {
      if (!(/([\w]+@[a-zA-Z\.]+)/gm).test(value)) {
        throw new TypeError(`Invalid e-mail`)
      }

      this._email = value;
  }

  set firstName(value) {
      let nameLength = value.length >= 3 && value.length <= 20;
      let latinLettersValidation = (/^([a-zA-Z]+)$/gm).test(value);

      if (!nameLength) {
          throw new TypeError('First name must be between 3 and 20 characters long')
      }
      if (!latinLettersValidation) {
        throw new TypeError('First name must contain only Latin characters')
          
      }

      this._firstName = value;
  }
  get email() {}

  get firstName() {}

  get lastName() {}


}

let acc = new CheckingAccount('1314', 'ivan@some.com','Ivan','Petrov')
console.log(acc);
