const axios = require("axios");

export const executeSOQL = async (query, auth) => {
  const response = await axios
    .get(auth.instance_url + `/services/data/v42.0/query/?q=${query}`, {
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
        "Content-Type": "application/json"
      }
    })
    .catch(err => {
      throw err;
    });

  const { data } = response;
  return data;
};

export const getSFAuth = async ({
  sfUrl,
  sfClientId,
  sfClientSecret,
  sfUsername,
  sfPassword
}) => {
  const info = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  try {
    const result = await axios.post(
      sfUrl + "services/oauth2/token",
      querystring.stringify({
        grant_type: "password",
        client_id: sfClientId,
        client_secret: sfClientSecret,
        username: sfUsername,
        password: sfPassword
      }),
      info
    );

    return result.data;
  } catch (error) {
    throw error;
  }
};
