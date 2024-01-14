export default {
  login(user) {
    return fetch(`${process.env.API_URL}users/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  },
};
