export default (axios) => ({
  login: async (email, password) => {
    try {
      const { data } = await axios.post('/api/login/', {
        email,
        password,
      });
      const { token } = data;
      if (data) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return data;
      } else {
        console.log('실패');
      }
    } catch (e) {
      console.error(e);
    }
  },

  logout: async () => {
    try {
      axios.defaults.headers.common['Authorization'] = '';
    } catch (e) {
      console.error(e);
    }
  },

  signup: async (user) => {
    try {
      const {
        email,
        password,
        name,
        phoneNumber: contact,
        birth,
        gender,
      } = user;
      const { data } = await axios.post('/api/users/', {
        email,
        password,
        name,
        contact,
        birth,
        gender,
      });
      console.log(data);
      if (data) {
        return true;
      }
    } catch (e) {
      console.error(e);
    }
  },
});
