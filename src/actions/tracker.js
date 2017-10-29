const ADD_WEBCOMIC = "ADD_WEBCOMIC";
const REMOVE_WEBCOMIC = "REMOVE_WEBCOMIC";

function addWebcomic(wc) {
  return {
    type: ADD_WEBCOMIC,
    name: wc.name,
    days: wc.days,
    url: wc.url,
    iconUrl: wc.iconUrl
  }
};

function removeWebcomic(name) {
  return {
    type: REMOVE_WEBCOMIC,
    name
  }
};

export {
  ADD_WEBCOMIC,
  REMOVE_WEBCOMIC,
  addWebcomic,
  removeWebcomic
}
