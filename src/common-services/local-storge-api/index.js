/* eslint-disable no-undef */

function getLocalStorage() {
  return window.localStorage;
}

export function getItem(key) {
  return JSON.parse(getLocalStorage().getItem(key));
}

export function setItem(key, item) {
  getLocalStorage().setItem(key, item);
}

export function removeItem(key) {
  getLocalStorage().removeItem(key);
}
