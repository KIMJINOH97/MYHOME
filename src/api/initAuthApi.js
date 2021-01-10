export default (axios) => ({
  login: async (email, password) => {
    try {
      console.log(email, password);
      const { data } = await axios.post('/api/login/', {
        email,
        password,
      });
      const { token } = data;
      console.log('결과 데이터', data);
      if (data) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return data;
      } else {
        alert('정보가 일치하지 않습니다.');
      }
    } catch (e) {
      console.error(e);
    }
  },

  logout: async () => {
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
