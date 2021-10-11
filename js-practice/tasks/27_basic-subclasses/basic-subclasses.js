export class Human {
  constructor(sex, name) {
    this.sex = sex;
    this.name = name;
  }
}

export class Man extends Human {
  constructor(name) {
    super('male', name);
  }
}

export class Woman extends Human {
  constructor(name) {
    super('female', name);
  }
}

export class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}
