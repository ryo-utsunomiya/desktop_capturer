import createTwitterOAuth from "../../src/main/createTwitterOAuth";
import createTwitterClient from "../../src/main/createTwitterClient";
import {ACCESS_TOKEN, ACCESS_TOKEN_SECRET} from "../../twitter_credentials";

const client = createTwitterClient(
    createTwitterOAuth(),
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
);

client.verifyCredentials()
    .then(data => console.log(data))
    .catch(error => console.error(error));