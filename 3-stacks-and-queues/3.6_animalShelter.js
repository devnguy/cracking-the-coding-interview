/**
 * An animal shelter, which holds only dogs and cats, operates on a strictly
 * "first in, first out" basis. People must adopt either the "oldest" (based
 * on arrival time) of all animals at the shelter, or they can select whether
 * they would prefer a dog or a cat (and will receive the oldest animal of
 * that type). They cannot select which specific animal they would like.
 * Create the data structures to maintain this system and implement operations
 * such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the
 * built in LinkedList data structure.
 */

const { LinkedList } = require('../2-linked-lists/LinkedList')

class Queue extends LinkedList {
  constructor() {
    super()
  }

  /**
   * Removes and returns the first item in the queue.
   */
  dequeue() {
    if (!this.head) return
    const head = this.head
    this.head = this.head.next
    return head.data
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = new Queue()
    this.cats = new Queue()
  }

  enqueue(animal) {
    if (animal.type === 'DOG') {
      this.dogs.add(animal)
    } else {
      this.cats.add(animal)
    }
  }

  dequeueDog() {
    return this.dogs.dequeue()
  }

  dequeueCat() {
    return this.cats.dequeue()
  }

  dequeueAny() {
    if (!this.dogs.head && !this.cats.head) return
    if (!this.dogs.head) return this.dequeueCat()
    if (!this.cats.head) return this.dequeueDog()
    if (this.dogs.head.data.timeAdded <= this.cats.head.data.timeAdded) {
      return this.dequeueDog()
    } else {
      return this.dequeueCat()
    }
  }
}

const a = new AnimalShelter()

a.enqueue({ type: 'DOG', timeAdded: 10 })
a.enqueue({ type: 'DOG', timeAdded: 11 })
a.enqueue({ type: 'DOG', timeAdded: 12 })
a.enqueue({ type: 'DOG', timeAdded: 13 })
a.enqueue({ type: 'DOG', timeAdded: 14 })
a.enqueue({ type: 'CAT', timeAdded: 9 })
a.enqueue({ type: 'CAT', timeAdded: 12 })

console.log(a.dequeueAny())
console.log(a.dequeueAny())
console.log(a.dequeueAny())
