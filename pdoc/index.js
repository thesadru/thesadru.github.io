URLS=[
"genshinstats/index.html",
"genshinstats/daily.html",
"genshinstats/errors.html",
"genshinstats/genshinstats.html",
"genshinstats/hoyolab.html",
"genshinstats/pretty.html",
"genshinstats/utils.html",
"genshinstats/wishes.html"
];
INDEX=[
{
"ref":"genshinstats",
"url":0,
"doc":"Wrapper for the Genshin Impact's api. This is an unofficial wrapper for the Genshin Impact gameRecord and wish history api. Majority of the endpoints are implemented, documented and typehinted. All endpoints require to be logged in with either a cookie or an authkey, read the README.md for more info. https: github.com/thesadru/genshinstats"
},
{
"ref":"genshinstats.daily",
"url":1,
"doc":"Automatic sign-in for hoyolab's daily rewards. Automatically claims the next daily reward in the daily check-in rewards."
},
{
"ref":"genshinstats.daily.fetch_daily_endpoint",
"url":1,
"doc":"Fetch an enpoint for daily rewards",
"func":1
},
{
"ref":"genshinstats.daily.get_daily_reward_info",
"url":1,
"doc":"Fetches daily award info for the currently logged-in user. Returns a tuple - whether the user is logged in, how many total rewards the user has claimed so far",
"func":1
},
{
"ref":"genshinstats.daily.get_claimed_rewards",
"url":1,
"doc":"Gets all claimed awards for the currently logged-in user",
"func":1
},
{
"ref":"genshinstats.daily.get_monthly_rewards",
"url":1,
"doc":"Gets a list of avalible rewards for the current month",
"func":1
},
{
"ref":"genshinstats.daily.claim_daily_reward",
"url":1,
"doc":"Signs into hoyolab and claims the daily rewards. Chinese and overseas servers work a bit differently, so you must specify whether you want to claim rewards for chinese accounts. When claiming rewards for other users you may add a cookie argument. Returns the claimed reward or None if the reward cannot be claimed yet.",
"func":1
},
{
"ref":"genshinstats.errors",
"url":2,
"doc":"Genshinstats errors. These take in only a single argument: msg. It's possible to add retcodes and the original api response message with  .set_reponse() ."
},
{
"ref":"genshinstats.errors.GenshinStatsException",
"url":2,
"doc":"Base Exception for all genshinstats errors."
},
{
"ref":"genshinstats.errors.GenshinStatsException.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.GenshinStatsException.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.GenshinStatsException.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.GenshinStatsException.msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.TooManyRequests",
"url":2,
"doc":"Made too many requests and got ratelimited"
},
{
"ref":"genshinstats.errors.TooManyRequests.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.TooManyRequests.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.TooManyRequests.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.NotLoggedIn",
"url":2,
"doc":"Cookies have not been provided."
},
{
"ref":"genshinstats.errors.NotLoggedIn.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.NotLoggedIn.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.NotLoggedIn.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.AccountNotFound",
"url":2,
"doc":"Tried to get data with an invalid uid."
},
{
"ref":"genshinstats.errors.AccountNotFound.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.AccountNotFound.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.AccountNotFound.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.DataNotPublic",
"url":2,
"doc":"User hasn't set their data to public."
},
{
"ref":"genshinstats.errors.DataNotPublic.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.DataNotPublic.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.DataNotPublic.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.CodeRedeemException",
"url":2,
"doc":"Code redemption failed."
},
{
"ref":"genshinstats.errors.CodeRedeemException.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.CodeRedeemException.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.CodeRedeemException.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.SignInException",
"url":2,
"doc":"Sign-in failed"
},
{
"ref":"genshinstats.errors.SignInException.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.SignInException.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.SignInException.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.AuthkeyError",
"url":2,
"doc":"Base GachaLog Exception."
},
{
"ref":"genshinstats.errors.AuthkeyError.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.AuthkeyError.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.AuthkeyError.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.InvalidAuthkey",
"url":2,
"doc":"An authkey is invalid."
},
{
"ref":"genshinstats.errors.InvalidAuthkey.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.InvalidAuthkey.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.InvalidAuthkey.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.AuthkeyTimeout",
"url":2,
"doc":"An authkey has timed out."
},
{
"ref":"genshinstats.errors.AuthkeyTimeout.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.AuthkeyTimeout.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.AuthkeyTimeout.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.MissingAuthKey",
"url":2,
"doc":"No gacha authkey was found."
},
{
"ref":"genshinstats.errors.MissingAuthKey.retcode",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.MissingAuthKey.orig_msg",
"url":2,
"doc":""
},
{
"ref":"genshinstats.errors.MissingAuthKey.set_response",
"url":2,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.raise_for_error",
"url":2,
"doc":"Raises a custom genshinstats error from a response.",
"func":1
},
{
"ref":"genshinstats.genshinstats",
"url":3,
"doc":"Wrapper for the hoyolab.com gameRecord api. Can fetch data for a user's stats like stats, characters, spiral abyss runs ."
},
{
"ref":"genshinstats.genshinstats.set_cookie",
"url":3,
"doc":"Logs-in using a cookie. Usage: >>> set_cookie(ltuid= ., ltoken= .) >>> set_cookie(account_id= ., cookie_token= .) >>> set_cookie({'ltuid':  ., 'ltoken':  .}) >>> set_cookie(\"ltuid= .; ltoken= .\")",
"func":1
},
{
"ref":"genshinstats.genshinstats.set_cookies",
"url":3,
"doc":"Sets multiple cookies at once to cycle between. Takes same arguments as set_cookie. Unlike set_cookie, this function allows for multiple cookies to be used at once. This is so far the only way to circumvent the rate limit. If clear is set to False the previously set cookies won't be cleared.",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_browser_cookies",
"url":3,
"doc":"Gets cookies from your browser for later storing. If a specific browser is set, gets data from that browser only. Avalible browsers: chrome, chromium, opera, edge, firefox",
"func":1
},
{
"ref":"genshinstats.genshinstats.set_cookies_auto",
"url":3,
"doc":"Like set_cookie, but gets the cookies by itself from your browser. Requires the module browser-cookie3 Be aware that this process can take up to 10 seconds. To speed it up you may select a browser. If a specific browser is set, gets data from that browser only. Avalible browsers: chrome, chromium, opera, edge, firefox",
"func":1
},
{
"ref":"genshinstats.genshinstats.set_cookie_auto",
"url":3,
"doc":"Like set_cookie, but gets the cookies by itself from your browser. Requires the module browser-cookie3 Be aware that this process can take up to 10 seconds. To speed it up you may select a browser. If a specific browser is set, gets data from that browser only. Avalible browsers: chrome, chromium, opera, edge, firefox",
"func":1
},
{
"ref":"genshinstats.genshinstats.fetch_endpoint",
"url":3,
"doc":"Fetch an enpoint from the API. Takes in an endpoint url which is joined with the base url. A request is then sent and returns a parsed response. Includes error handling and ds token renewal. Can specifically use the chinese base url and request data for chinese users, but that requires being logged in as that user. Supports handling ratelimits if multiple cookies are set with  set_cookies ",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_user_stats",
"url":3,
"doc":"Gets basic user information and stats.",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_characters",
"url":3,
"doc":"Gets characters of a user. Characters contain info about their level, constellation, weapon, and artifacts. Talents are not included. If character_ids are provided then only characters with those ids are returned.",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_spiral_abyss",
"url":3,
"doc":"Gets spiral abyss runs of a user and details about them. Every season these stats refresh and you can get the previous stats with  previous .",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_all_user_data",
"url":3,
"doc":"Fetches all data a user can has. Very slow. A helper function that gets all avalible data for a user and returns it as one dict. However that makes it fairly slow so it's not recommended to use it outside caching.",
"func":1
},
{
"ref":"genshinstats.hoyolab",
"url":4,
"doc":"Wrapper for the hoyolab.com community api. Can search users, get record cards, redeem codes ."
},
{
"ref":"genshinstats.hoyolab.get_langs",
"url":4,
"doc":"Gets codes of all languages and their names",
"func":1
},
{
"ref":"genshinstats.hoyolab.set_visibility",
"url":4,
"doc":"Sets your data to public or private.",
"func":1
},
{
"ref":"genshinstats.hoyolab.search",
"url":4,
"doc":"Searches all users. Can return up to 20 results, based on size.",
"func":1
},
{
"ref":"genshinstats.hoyolab.hoyolab_check_in",
"url":4,
"doc":"Checks in the currently logged-in user to hoyolab. This function will not claim daily rewards !",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_game_accounts",
"url":4,
"doc":"Gets all game accounts of the currently signed in player. Can get accounts both for overseas and china.",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_record_card",
"url":4,
"doc":"Gets a game record card of a user based on their hoyolab uid. A record card contains data regarding the stats of a user for their displayed server. Their uid for a given server is also included. In case the user hasn't set their data to public or you are ratelimited the function returns None. You can get a hoyolab id with  search .",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_uid_from_hoyolab_uid",
"url":4,
"doc":"Gets a uid with a community uid. This is so it's possible to search a user and then directly get the uid. In case the uid is private, returns None.",
"func":1
},
{
"ref":"genshinstats.hoyolab.redeem_code",
"url":4,
"doc":"Redeems a gift code for the currently signed in user. Api endpoint for https: genshin.mihoyo.com/en/gift.  ! This function requires account_id and cookie_token cookies  ! The code will be redeemed for every avalible account, specifying the uid will claim it only for that account. Returns the amount of users it managed to claim codes for. You can claim codes only every 5s so you must sleep between claims. The function sleeps for you when claiming for every account but you must sleep yourself when passing in a uid or when an error is encountered. Currently codes can only be claimed for overseas accounts, not chinese.",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_recommended_users",
"url":4,
"doc":"Gets a list of recommended active users",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_hot_posts",
"url":4,
"doc":"Fetches hot posts from the front page of hoyolabs Posts are split into different forums set by ids 1-5. There may be less posts returned than size.",
"func":1
},
{
"ref":"genshinstats.pretty",
"url":5,
"doc":"Prettifiers for genshinstats api returns. Fixes the huge problem of outdated field names in the api, that were leftover from during development"
},
{
"ref":"genshinstats.pretty.prettify_user_stats",
"url":5,
"doc":"",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_characters",
"url":5,
"doc":"",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_spiral_abyss",
"url":5,
"doc":"",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_wish_history",
"url":5,
"doc":"",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_gacha_items",
"url":5,
"doc":"",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_banner_details",
"url":5,
"doc":"",
"func":1
},
{
"ref":"genshinstats.utils",
"url":6,
"doc":"Various utility functions for genshinstats."
},
{
"ref":"genshinstats.utils.recognize_server",
"url":6,
"doc":"Recognizes which server a UID is from.",
"func":1
},
{
"ref":"genshinstats.utils.is_game_uid",
"url":6,
"doc":"Recognizes whether the uid is a game uid.",
"func":1
},
{
"ref":"genshinstats.utils.is_chinese",
"url":6,
"doc":"Recognizes whether the server/uid is chinese.",
"func":1
},
{
"ref":"genshinstats.utils.get_output_log",
"url":6,
"doc":"Find and return the Genshin Impact output log. None if not found.",
"func":1
},
{
"ref":"genshinstats.wishes",
"url":7,
"doc":"Genshin Impact wish history. Gets wish history from the current banners in a clean api. Requires an authkey that is fetched automatically from a logfile."
},
{
"ref":"genshinstats.wishes.extract_authkey",
"url":7,
"doc":"Extracts an authkey from the provided string. Returns None if not found.",
"func":1
},
{
"ref":"genshinstats.wishes.get_authkey",
"url":7,
"doc":"Gets the query for log requests. This will either be done from the logs or from a tempfile.",
"func":1
},
{
"ref":"genshinstats.wishes.set_authkey",
"url":7,
"doc":"Sets an authkey for log requests. You may pass in an authkey, a url with an authkey or a path to a logfile with the authkey.",
"func":1
},
{
"ref":"genshinstats.wishes.get_banner_ids",
"url":7,
"doc":"Gets all banner ids from a log file. You need to open the details of all banners for this to work.",
"func":1
},
{
"ref":"genshinstats.wishes.fetch_gacha_endpoint",
"url":7,
"doc":"Fetch an enpoint from mihoyo's gacha info. Takes in an endpoint url which is joined with the base url. If an authkey is provided, it uses that authkey specifically. A request is then sent and returns a parsed response. Includes error handling and getting the authkey.",
"func":1
},
{
"ref":"genshinstats.wishes.get_banner_types",
"url":7,
"doc":"Gets ids for all banners and their names",
"func":1
},
{
"ref":"genshinstats.wishes.get_wish_history",
"url":7,
"doc":"Gets wish history. Note that pulls are yielded and not returned to account for pagination. When a banner_type is set, only data from that banner type is retuned. You can get banner types and their names from get_banner_types. If a size is set the total returned amount of pulls will be equal to or lower than the size. To be able to get history starting from somewhere other than the last pull you may pass in the id of the pull right chronologically after the one you want to start from as end_id.",
"func":1
},
{
"ref":"genshinstats.wishes.get_gacha_items",
"url":7,
"doc":"Gets the list of characters and weapons that can be gotten from the gacha.",
"func":1
},
{
"ref":"genshinstats.wishes.get_banner_details",
"url":7,
"doc":"Gets details of a specific banner. This requires the banner's id. These keep rotating so you need to get them with get_banner_ids(). example standard wish: \"a37a19624270b092e7250edfabce541a3435c2\" The newbie gacha has no json resource tied to it so you can't get info about it.",
"func":1
},
{
"ref":"genshinstats.wishes.get_uid_from_authkey",
"url":7,
"doc":"Gets a uid from an authkey. If an authkey is not passed in the function uses the currently set authkey.",
"func":1
},
{
"ref":"genshinstats.wishes.validate_authkey",
"url":7,
"doc":"Checks whether an authkey is valid by sending a request If a previous authkey is provided the function also checks if the authkey belongs to the same person as the previous one.",
"func":1
}
]