const map = new Map();

export class Person {
  constructor(fullName) {
    map.set(this, {});
    this.setFullName(fullName);
  }

  setFullName(fullName) {
    if (typeof fullName !== 'string') return;

    const [firstName, lastName] = fullName.split(' ');
    const self = map.get(this);
    self.firstName = firstName;
    self.lastName = lastName;
  }

  setFirstName(firstName) {
    if (typeof firstName !== 'string') return;

    const self = map.get(this);
    self.firstName = firstName;
  }

  setLastName(lastName) {
    if (typeof lastName !== 'string') return;

    const self = map.get(this);
    self.lastName = lastName;
  }

  getFullName() {
    const self = map.get(this);
    return `${self.firstName} ${self.lastName}`;
  }

  getFirstName() {
    return map.get(this).firstName;
  }

  getLastName() {
    return map.get(this).lastName;
  }
}
