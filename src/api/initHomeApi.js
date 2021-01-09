const GEO_API = 'AIzaSyD6RJg-Ul1eU863W7kYa9PDkMJpR1bmUis';
const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

export default (axios) => ({
  putHome: async (home) => {
    try {
      console.log('전송');
      const { data: DD } = await axios.get(
        `${URL}${home.address},+CA&key=${GEO_API}`
      );
      console.log(DD);
      console.log(axios.defaults.headers);
      const {
        address,
        address_detail,
        zip_code,
        room_type,
        deposit,
        monthly_rent,
        management_fee,
        total_floor,
        floor,
        structure,
        space,
        completion_year,
        elevator,
        desk,
        bed,
        refrigerator,
        induction,
        air_conditioner,
        washer,
        short_term,
        heating,
        occupancy_date,
        introduction,
        detail,
      } = home;
      const { data } = await axios.post('/api/rooms/', {
        address,
        address_detail,
        zip_code,
        room_type,
        deposit,
        monthly_rent,
        management_fee,
        total_floor,
        floor,
        structure,
        space,
        completion_year,
        elevator,
        desk,
        bed,
        refrigerator,
        induction,
        air_conditioner,
        washer,
        short_term,
        heating: heating ? '중앙난방' : '개별난방',
        occupancy_date,
        introduction,
        detail,
      });
      if (data) return data;
      else return false;
    } catch (e) {
      console.error(e);
    }
  },
});
