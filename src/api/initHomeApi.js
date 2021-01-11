const GEO_API = 'AIzaSyD6RJg-Ul1eU863W7kYa9PDkMJpR1bmUis';
const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

export default (axios) => ({
  putHome: async (home) => {
    try {
      console.log('전송');
      const { data: DD } = await axios.get(
        `${URL}${home.address},+CA&key=${GEO_API}`
      );
      const location = DD.results[0].geometry.location;
      //console.log(DD.results[0].geometry.location);

      //console.log(axios.defaults.headers);
      const { heating } = home;
      const { data } = await axios.post('/api/rooms/', {
        ...home,
        heating: heating ? '중앙난방' : '개별난방',
        latitude: location.lat,
        longitude: location.lng,
      });
      if (data) return data;
      else return false;
    } catch (e) {
      console.error(e);
    }
  },

  getHome: async () => {
    try {
      const { data } = await axios.get('/api/rooms/');
      //console.log(data);

      if (data) return data;
      else return false;
    } catch (error) {
      console.error(error);
    }
  },

  postReview: async (id, rate, pros, cons, content) => {
    try {
      const { data } = await axios.post(`/api/rooms/${id}/post-comment/`, {
        pros,
        cons,
        content,
        rate,
      });
      //console.log(data);
      if (data) return data;
    } catch (e) {
      console.error(e);
    }
  },

  getPresentHome: async (id) => {
    try {
      const { data } = await axios.get(`/api/rooms/${id}/`);
      if (data) return data;
    } catch (e) {
      console.error(e);
    }
  },
});
