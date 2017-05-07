import {OAuth} from "oauth";
import {CONSUMER_KEY, CONSUMER_SECRET} from "../../twitter_credentials";

function createTwitterOAuth() {
    return new OAuth(
        "https://api.twitter.com/oauth/request_token",
        "https://api.twitter.com/oauth/access_token",
        CONSUMER_KEY,
        CONSUMER_SECRET,
        "1.0A",
        null,
        "HMAC-SHA1"
    );
}

export default createTwitterOAuth;