export type AuthActionSuccess = {
  ok: true;
};

export type AuthActionFailure = {
  ok: false;
  title: string;
  description: string;
};

export type AuthActionResult = AuthActionSuccess | AuthActionFailure;
