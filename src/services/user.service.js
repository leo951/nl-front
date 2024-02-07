const user = {
  async updateUser(body, token) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );
      if (!response.ok) {
        throw new Error("Request failed with status ", response.status);
      }
      return await response.json();
    } catch (error) {
      console.log("updateUser error : ", error);
      throw error;
    }
  },

  async getUser(token) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Request failed with status ", response.status);
      }
      return await response.json();
    } catch (error) {
      console.log("getUser error : ", error);
      throw error;
    }
  },
};

export default user;
