self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/explorejapan(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|trpc|_next|_vercel|healthz|.*\\..*).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api|trpc|_next|_vercel|healthz|.*\\..*).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()