const BASE_URL = '/api/playlists/';

export default {
  index,
  create,
  show
};

function index() {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function show(id) {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}${id}/`, options).then(res => res.json());
}

function create(playlist) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(playlist)
    };
    console.log(options.body);
    return fetch(BASE_URL, options).then(res => res.json());
}
  