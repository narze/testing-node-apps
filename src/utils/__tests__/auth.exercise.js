import cases from 'jest-in-case'
import {isPasswordAllowed} from '../auth'

cases(
  'isPasswordAllowed: valid passwords',
  (options) => {
    expect(isPasswordAllowed(options.password)).toBe(true)
  },
  {
    'valid password': {
      password: 'aBc123!',
    },
  },
)

cases(
  'isPasswordAllowed: invalid passwords',
  (options) => {
    expect(isPasswordAllowed(options.password)).toBe(false)
  },
  {
    'too short': {
      password: 'aC3!',
    },
  },
)

describe('isPasswordAllowed only allows some passwords', () => {
  const allowedPasswords = ['aBc123!']
  const disallowedPasswords = [
    'a2c!',
    '123456!',
    'ABCdef!',
    'abc123!',
    'ABC123!',
    'abcDEF123',
  ]

  allowedPasswords.forEach((password) => {
    test(`allows ${password}`, () => {
      expect(isPasswordAllowed(password)).toBe(true)
    })
  })

  disallowedPasswords.forEach((password) => {
    test(`disallows ${password}`, () => {
      expect(isPasswordAllowed(password)).toBe(false)
    })
  })
})
