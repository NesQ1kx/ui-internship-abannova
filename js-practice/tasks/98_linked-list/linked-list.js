export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const prev = this.tail;

    this.tail = {
      next: null,
      prev,
      value,
    };
    this.amount += 1;

    if (prev) {
      prev.next = this.tail;
    } else {
      this.head = this.tail;
    }
  }

  pop() {
    const item = this.tail;

    if (item) {
      this.amount -= 1;

      if (item.prev) {
        this.tail = item.prev;
        item.prev.next = null;
      } else {
        this.tail = null;
        this.head = null;
      }
    }

    return item?.value;
  }

  iterate(cb) {
    let current = this.head;

    while (current) {
      cb(current);
      current = current.next;
    }
  }

  insertAfter(from, value) {
    let current = this.head;

    while (current) {
      if (current.value === from) {
        const { next } = current;

        current.next = {
          value,
          prev: current,
          next,
        };
        this.amount += 1;

        return true;
      }
      current = current.next;
    }

    return false;
  }

  removeItem(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        const { prev, next } = current;

        if (prev) {
          prev.next = next;

          if (next) {
            next.prev = prev;
          }
        }
        this.amount -= 1;

        return true;
      }
      current = current.next;
    }

    return false;
  }
}
