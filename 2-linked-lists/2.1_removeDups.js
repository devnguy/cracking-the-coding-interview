const LinkedList = require('./LinkedList')

const ll = new LinkedList()
ll.add(2)
ll.add(2)
ll.add(1)
ll.add(1)
ll.add(3)
ll.add(3)

const removeDuplicates = (ll) => {
  const duplicates = {}
  let current = ll.head
  while (current) {
    if (!duplicates[current.data]) {
      duplicates[current.data] = 1
    } else {
      duplicates[current.data]++
    }
    current = current.next
  }
  ll.display()

  current = ll.head
  while (current) {
    if (duplicates[current.data] > 1) {
      ll.remove(current.data)
      duplicates[current.data]--
    }
    current = current.next
  }
  ll.display()
  console.log(duplicates)
}

removeDuplicates(ll)
