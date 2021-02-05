const API = "https://cs-backendv3.herokuapp.com/v1";
export const login = (data, callback) => {
  fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((e) => callback(e, null));
};
export const Regsiter = (data, callback) => {
  fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((e) => callback(e, null));
};
export const getCenter = (callback, data) => {
  fetch(`${API}/stations`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
export const getOnecenter = (id, callback) => {
  fetch(`${API}/station/${id}`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
