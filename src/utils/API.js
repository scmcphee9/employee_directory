import axios from "axios";

export default {
  getEmployees: function () {
    return axios.get(
      "https://randomuser.me/api/?inc=picture,name,phone,email,dob?results=100"
    );
  },
};
