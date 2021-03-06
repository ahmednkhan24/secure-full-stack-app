const oktaAuthConfig = {
  baseUrl: "https://dev-95390738.okta.com",
  issuer: "https://dev-95390738.okta.com/oauth2/default",
  clientId: "0oa69wf3eB0CgATd75d6",
  redirectUri: "http://localhost:8080/implicit/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: false,
};

export default oktaAuthConfig;
