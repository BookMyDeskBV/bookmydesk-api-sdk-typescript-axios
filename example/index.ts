import {DefaultApiFactory} from "../index";

const client = DefaultApiFactory(undefined,
  "http://localhost:3500"
);

const clientId = "ADMIN_APP_CLIENT_ID";
const clientSecret = "ADMIN_APP_CLIENT_SECRET";


client.oAuthPasswordGrant(clientId, clientSecret, undefined, "password", "admin@example.com", "123456").then((response) => {
  console.log(response.data.access_token);
  console.log(response.data.refresh_token);
}).catch(e => {console.error(e)});