import {isPasswordAllowed} from '../auth'

test('isPasswordAllowed returns false if password is too short', () => {
  const result = isPasswordAllowed('a2c!')
  expect(result).toBeFalsy()
})

test('isPasswordAllowed returns false if password has no alphavet', () => {
  const result = isPasswordAllowed('123456!')
  expect(result).toBeFalsy()
})

test('isPasswordAllowed returns false if password has no numbers', () => {
  const result = isPasswordAllowed('ABCdef!')
  expect(result).toBeFalsy()
})

test('isPasswordAllowed returns false if password has no uppercase letters', () => {
  const result = isPasswordAllowed('abc123!')
  expect(result).toBeFalsy()
})

test('isPasswordAllowed returns false if password has no lowercase letters', () => {
  const result = isPasswordAllowed('ABC123!')
  expect(result).toBeFalsy()
})

test('isPasswordAllowed returns false if password has no non-alpha letters', () => {
  const result = isPasswordAllowed('abcDEF123')
  expect(result).toBeFalsy()
})

test('isPasswordAllowed returns true if password is valid', () => {
  const result = isPasswordAllowed('aBc123!')
  expect(result).toBeTruthy()
})
