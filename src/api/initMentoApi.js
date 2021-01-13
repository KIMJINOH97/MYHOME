export default (axios) => ({
  getMento: async () => {
    try {
      const { data } = await axios.get('/api/mentors/');
      console.log(data);
      if (data) return data;
      else return false;
    } catch (e) {
      console.error(e);
    }
  },

  getPresentMento: async (id) => {
    try {
      const { data } = await axios.get(`/api/mentors/${id}/`);
      if (data) return data;
    } catch (e) {
      console.error(e);
    }
  },
});
