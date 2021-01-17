const GEO_API = 'AIzaSyD6RJg-Ul1eU863W7kYa9PDkMJpR1bmUis';
const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

export default (axios) => ({
  putHome: async (home, photo) => {
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

      if (data) {
        console.log(`/api/rooms/${data.id}/post-photo/`, photo);
        const req = await axios.post(`/api/rooms/${data.id}/post-photo/`, {
          photo_file: photo,
        });
        console.log(req);
        if (photoData) return data;
      } else return false;
    } catch (e) {
      console.error(e);
    }
  },

  postPhoto: async (form) => {
    try {
      // for (var pair of form.entries()) {
      //   console.log(pair[0] + ', ' + pair[1]);
      // }
      const { data } = await axios.post(
        `/api/rooms/2/post-photo/`,
        { photo_file: form },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      return data;
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

  postFavorate: async (roomId) => {
    try {
      console.log('보내는 중');
      console.log(`/api/interest-rooms/${roomId}/`);
      const { status, data } = await axios.post(
        `/api/interest-rooms/${roomId}/`
      );
      console.log(status);
      return status;
    } catch (e) {
      console.error(e);
    }
  },

  getFavorite: async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/interest-room-list/`);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
});
