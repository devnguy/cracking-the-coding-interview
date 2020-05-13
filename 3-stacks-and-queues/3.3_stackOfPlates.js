/**
 * Imagine a (literal) stack of plates. If the stack gets too high, it might
 * topple. Therefore, in real life, we would likely start a new stack when the
 * previous stack exceeds some threshold. Implement a data structure
 * SetOfStacks that mimics this. SetOfStaacks should be composed of several
 * stacks and should create a new stack once the previous one exceeds
 * capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
 * identically to a single stack (that is, pop() should return the same values
 * as it would if there were just a single stack).
 *
 * FOLLOW UP
 *
 * Implement a function popAt(int index) which performs a pop operation on a
 * specific sub-stack.
 */

const Stack = require('./Stack')

class SetOfStacks {
  constructor(cap) {
    this.cap = cap
    this.top = 0
    this.stacks = []
    this.stacks.push(new Stack())
  }

  push(data) {
    if (this.stacks[this.top].length === this.cap) {
      this.top++
      if (!this.stacks[this.top]) {
        this.stacks[this.top] = new Stack()
      }
    }
    this.stacks[this.top].push(data)
  }

  pop() {
    const poppedTop = this.stacks[this.top].pop()
    // Previous stacks could be empty from popAt()
    while (this.stacks[this.top].length === 0 && this.top > 0) {
      this.top--
    }
    return poppedTop
  }

  popAt(index) {
    const poppedTop = this.stacks[index].pop()
    while (this.stacks[this.top].length === 0 && this.top > 0) {
      this.top--
    }
    return poppedTop
  }

  display() {
    this.stacks.forEach((stack) => {
      stack.displayReverse()
    })
  }
}

const s = new SetOfStacks(3)
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
s.display()
s.pop()
s.pop()
s.display()
s.popAt(1)
s.popAt(1)
s.popAt(1)
s.popAt(1)

s.display()
