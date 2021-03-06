import { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import axios from "axios";

const getAccessToken = (oktaAuth) =>
  oktaAuth.tokenManager
    .get("accessToken")
    .catch((err) => console.log("Okta Error", err));

const retrieveAccessToken = async (oktaAuth, setAccessToken) => {
  const accessToken = await getAccessToken(oktaAuth);
  setAccessToken(accessToken.value);
};

const useData = () => {
  const { oktaAuth } = useOktaAuth();
  const [data, setData] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (oktaAuth) {
      retrieveAccessToken(oktaAuth, setAccessToken);
    }
  }, [oktaAuth]);

  const fetchData = async () => {
    try {
      if (!accessToken) {
        setData(null);
      }

      const awsApi = axios.create({
        baseURL: "https://obq5xr37vg.execute-api.us-east-2.amazonaws.com",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const response = await awsApi.get("/");
      setData(response.data);
    } catch (err) {
      console.log("An error occurred fetching the data: ", err);
    }
  };

  return { data, fetchData };
};

export default useData;
