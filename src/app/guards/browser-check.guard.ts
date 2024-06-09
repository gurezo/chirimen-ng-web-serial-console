import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const browserCheckGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const userAgent = window.navigator.userAgent.toLowerCase();

  // デスクトップ版のChrome, Edge, Operaの判定
  const isChrome = /chrome/.test(userAgent) && !/edge|opr/.test(userAgent);
  const isEdge = /edg/.test(userAgent);
  const isOpera = /opr/.test(userAgent);

  if (isChrome || isEdge || isOpera) {
    return true; // アクセスを許可
  } else {
    router.navigate(['/unsupported-browser']);
    return false;
  }
};
