export const getAuth = jest.fn();
export const initializeApp = jest.fn();

export const GoogleAuthProvider = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const signInWithPopup = jest.fn(() => true);