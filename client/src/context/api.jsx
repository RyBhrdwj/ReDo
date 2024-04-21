import axios from "axios";

export default {
  getAllTasks: async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "fetch");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  postTask: async (data) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "post",
        data,
      );
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
    }
  },

  deleteTask: async (id) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_API_URL + "delete/" + id,
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  },
};
