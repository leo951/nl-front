const auth = {
  login(user) {
    console.log('Je suis user = ',user);
    return fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("Login request error:", error);
        throw error;
      });
  },
};

export default auth;
