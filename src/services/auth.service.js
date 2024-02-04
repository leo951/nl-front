const auth = {
  async login(user) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Login request error:", error);
      throw error;
    }
  },
};

export default auth;
