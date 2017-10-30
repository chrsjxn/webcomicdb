import { ADD_WEBCOMIC, REMOVE_WEBCOMIC } from '../actions/tracker';

const localStorageState = JSON.parse(window.localStorage.getItem('webcomicState'));

const initialState = localStorageState || {
  webcomics: [{
    name: 'Questionable Content',
    days: 'MTWRF',
    url: 'http://www.questionablecontent.net',
    iconUrl: 'http://www.questionablecontent.net/images/logo16.png'
  }, {
    name: 'Wilde Life',
    days: 'MWF',
    url: 'http://www.wildelifecomic.com/',
    iconUrl: 'http://www.wildelifecomic.com/images/logo.png'
  }]
};

function addWebcomic(state, action) {
  //Deep copy webcomics array
  let webcomics = state.webcomics.map((webcomic) => {
    return {
      name: webcomic.name,
      days: webcomic.days,
      url: webcomic.url,
      iconUrl :webcomic.iconUrl
    };
  });

  webcomics.push({
    name: action.name,
    days: action.days,
    url: action.url,
    iconUrl: action.iconUrl
  });

  let newState = {...state, webcomics};

  window.localStorage.setItem('webcomicState', JSON.stringify(newState));

  return newState;
};

function removeWebcomic(state, action) {
  let webcomics = state.webcomics.filter((webcomic) => webcomic.name !== action.name);

  let newState = {...state, webcomics};

  window.localStorage.setItem('webcomicState', JSON.stringify(newState));

  return newState;
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WEBCOMIC:
      return addWebcomic(state, action);
    case REMOVE_WEBCOMIC:
      return removeWebcomic(state, action);
    default:
      return state;
  }
};
