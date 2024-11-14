enum PAGE {
  selectMothod = 1,
  resetPassword,
  resetMail,
  checkPassword,
  checkCode4ResetPassword,
  checkCode4ResetMail,
}

const PAGES = {
  PASSWORD: <PAGE[]>[PAGE.selectMothod, PAGE.checkPassword, PAGE.resetMail],
  CODE: <PAGE[]>[PAGE.selectMothod, PAGE.checkCode4ResetMail, PAGE.resetMail],
  FORGET: <PAGE[]>[
    PAGE.selectMothod,
    PAGE.checkCode4ResetPassword,
    PAGE.resetPassword,
  ],
};

enum ACTION {
  next = 0,
  completeResetPassword,
  completeResetMail,
  forgetPassword
}

class PageStack {
  routes: PAGE[] = [];
  index = 0;
  constructor(routes: PAGE[], index: number) {
    this.routes = routes;
    this.index = index;
  }
  current(): PAGE {
    return this.routes?.[this.index];
  }
  previous(): PAGE {
    this.index = Math.max(0, this.index - 1);
    return this.current();
  }
  next(): PAGE {
    this.index = Math.min(this.index + 1, this.routes.length - 1);
    return this.current();
  }
}

export { PAGE, PAGES, PageStack, ACTION };
