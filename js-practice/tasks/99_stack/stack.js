export class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const prev = this.last;
    this.last = {
      next: null,
      prev,
      value,
    };
    this.size += 1;
  }

  pop() {
    const item = this.last;
    if (item) {
      this.size -= 1;
      if (item.prev) {
        this.last = item.prev;
      } else {
        this.last = null;
      }
    }
    return item?.value;
  }

  get isEmpty() {
    return this.size === 0;
  }
}
