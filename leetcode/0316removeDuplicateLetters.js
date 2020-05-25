const removeDuplicateLetters = (s) => {
  const seen = new Map()
  const splitString = s.split('')
  splitString.forEach((char) => {
    if (!seen.has(char)) {
      seen.set(char, 1)
    } else {
      seen.set(char, seen.get(char) + 1)
    }
  })
  console.log(seen)
}

const s = 'hello world'
removeDuplicateLetters(s)
