export const initialState = {
  status: "checking", //checking, 'not-authenticated', 'atuhenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};
export const authenticatedState = {
  status: "authenticated", //checking, 'not-authenticated', 'atuhenticated'
  uid: "123ABC",
  email: "prueba@google.com",
  displayName: "Demo User",
  photoURL: "https://demo.jpg",
  errorMessage: null,
};
export const notauthenticatedState = {
  status: "not-authenticated", //checking, 'not-authenticated', 'atuhenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "ABC123",
  email: "demo@google.com",
  displayName: "Demo User",
  photoURL: "https://demo.png",
};
