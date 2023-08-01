import {
  LogoutFirebase,
  loginWithEmail,
  signInWithGoogle,
} from "../../../src/firebase/providers";
import {
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  checkingAuthentication,
  starLoginWithEmail,
  startGoogleSignIn,
  startLogout,
} from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("pruebas en authThunks", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("debe de invocar el checkingCredentials", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn debe de llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);
    //thunk a probar
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });
  test("startGoogleSignIn debe de llamar checkingCredentials y logout - Eror", async () => {
    const loginData = { ok: false, errorMesage: "Un error en Google" };
    await signInWithGoogle.mockResolvedValue(loginData);

    //thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    // expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMesage));
  });

  test("starLoginWithEmail debe de llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmail.mockResolvedValue(loginData);

    await starLoginWithEmail(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("starLoginWithEmail debe de llamar checkingCredentials y login - Error", async () => {
    const loginData = { ok: false, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmail.mockResolvedValue(loginData);

    await starLoginWithEmail(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("debe de llamar logoutFirebase. clearNotes y logout", async () => {
    await startLogout()(dispatch);

    expect(LogoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    // expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
