// Testing Pure Functions

// 💣 remove this todo test (it's only here so you don't get an error about missing tests)
test.todo('remove me')

// 🐨 import the function that we're testing
// 💰 import {isPasswordAllowed} from '../auth'

import {isPasswordAllowed} from '../auth'

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//
// valid:
// - !aBc123
//
// invalid:
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters

test('returns false if password is too short', () => {
  const result = isPasswordAllowed('a2c!')
  expect(result).toBeFalsy()
})

test('returns false if password has no alphavet', () => {
  const result = isPasswordAllowed('123456!')
  expect(result).toBeFalsy()
})

test('returns false if password has no numbers', () => {
  const result = isPasswordAllowed('ABCdef!')
  expect(result).toBeFalsy()
})

test('returns false if password has no uppercase letters', () => {
  const result = isPasswordAllowed('abc123!')
  expect(result).toBeFalsy()
})

test('returns false if password has no lowercase letters', () => {
  const result = isPasswordAllowed('ABC123!')
  expect(result).toBeFalsy()
})

test('returns false if password has no non-alpha letters', () => {
  const result = isPasswordAllowed('abcDEF123')
  expect(result).toBeFalsy()
})

test('returns true if password is valid', () => {
  const result = isPasswordAllowed('aBc123!')
  expect(result).toBeTruthy()
})
