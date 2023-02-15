import request from "postman-request";

const forecast = function (longitude, latitude, callback) {
  const url = `https://api.tomorrow.io/v4/weather/realtime?location=${longitude},${latitude}&apikey=95Izt1T3pt4tEm5Zd0Q62z8NXFzopGuw&units=imperial`;
  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback("Network Disconnected");
    } else if (res.body.code) {
      callback("Location not Found");
    } else {
      callback(undefined, res.body);
    }
    // console.log(res.body);
  });
};

// request({ url: urlMapBox, json: true }, (error, res) => {
//   console.log(res.body.features[0].center);
// });

const locate = function (place, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    place
  )}.json?&limit=1&access_token=pk.eyJ1IjoidWRhc3NpIiwiYSI6ImNsZTQ2ODl1dDA1bDQzbm83aG9hM3k2c3cifQ.NvrSvzjSJVYJBIQCVCZdWw`;
  request({ url: url, json: true }, (error, res) => {
    if (error) {
      callback("Network Disconnected");
    } else if (res.body.features.length == 0) {
      callback("Location not Found");
    } else {
      callback(undefined, res.body.features[0].center);
    }
    // console.log(res.body);
  });
};

export { forecast, locate };
