var url = "http://fs1.co.il/bus/bitcoin.php";
const axios = require("axios");
const users = [
  { email: "shiko", password: 121212 },
  { email: "eytan", password: 121212 },
  { email: "asaf", password: 121212 },
];
module.exports = {
  async getDataFromApi() {
    const res = await axios.get(url);
    return res;
  },
};
module.exports = {users};
