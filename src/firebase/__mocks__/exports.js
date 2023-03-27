export const getAuth = jest.fn();
export const initializeApp = jest.fn();

export const GoogleAuthProvider = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => new Promise((resolve) => resolve()));
export const createUserWithEmailAndPassword = jest.fn(() => new Promise((resolve) => resolve()));
export const signInWithPopup = jest.fn(() => true);
