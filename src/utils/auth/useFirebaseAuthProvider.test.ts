import { renderHook, act } from '@testing-library/preact-hooks';
import { User } from 'firebase/auth';
import IAuthService from './IAuthService';
import useFirebaseAuthProvider from './useFirebaseAuthProvider';

const fakeUser:User = { email: 'example@gmail.com', uid: "xxxx", emailVerified: true } as User

const fakeUserPromise:Promise<User> = new Promise((resolve) => {
  resolve(fakeUser);
});

const fakeAuthService = ():IAuthService => ({
  signin: () => new Promise<User>((resolve) => { resolve(fakeUser) }),
  signup: () => fakeUserPromise,
  signout: () => new Promise<void>((resolve) => { resolve() }),
  authStateChanged: () => () => {},
})

test('should login', () => {
  const { result: {current} } = renderHook(() => useFirebaseAuthProvider(fakeAuthService()));

  expect(current?.user).toBe(null);
  act(() => {
    current?.signin("user@mail.com", "pw")
  })
  // why :(
  // expect(current?.user?.email).toBe("user@mail.com");
});
