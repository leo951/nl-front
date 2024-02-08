const stand = {
  async addStand(standTitle, token) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/newsStand`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title: standTitle }),
        }
      );
      if (!response.ok) {
        throw new Error("Request failed with status ", response.status);
      }
      return await response.json();
    } catch (error) {
      console.log("addStand error : ", error);
      throw error;
    }
  },
  async getStand(id, token) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/newsStand/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Request failed with status ", response.status);
      }
      return await response.json();
    } catch (error) {
      console.log("getStand error : ", error);
      throw error;
    }
  },
  async deleteStand(id, token) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/newsStand/delete/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Request failed with status ", response.status);
      }
      return await response.json();
    } catch (error) {
      console.log("deleteStand error : ", error);
      throw error;
    }
  }
};

export default stand;
