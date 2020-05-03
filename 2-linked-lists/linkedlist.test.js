const LinkedList = require('./LinkedList')

const ll = new LinkedList()

test('should contain values added', () => {
  ll.add(1)
  expect(ll.contains(1)).toBe(true)
  ll.add(2)
  ll.add(3)
  expect(ll.contains(2)).toBe(true)
  expect(ll.contains(3)).toBe(true)
})

test('should not contain values removed', () => {
  expect(ll.contains(1)).toBe(true)
  // Remove first Node
  ll.remove(1)
  expect(ll.contains(1)).toBe(false)
  expect(ll.contains(3)).toBe(true)
  // Remove last Node
  ll.remove(3)
  expect(ll.contains(3)).toBe(false)
})
