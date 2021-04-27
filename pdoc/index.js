URLS=[
"genshinstats/index.html",
"genshinstats/errors.html",
"genshinstats/gachalog.html",
"genshinstats/genshinstats.html",
"genshinstats/hoyolab.html",
"genshinstats/pretty.html",
"genshinstats/signin.html",
"genshinstats/utils.html"
];
INDEX=[
{
"ref":"genshinstats",
"url":0,
"doc":"Wrapper for the Genshin Impact's api. This is an unofficial wrapper for the Genshin Impact's api. Majority of the endpoints are implemented, documented and typehinted. Majority of the endpoints require a cookie and a ds token, look at README.md for more info. (Some functions may have a raw parameter, this prettifies the output to a readable version.) https: github.com/thesadru/genshinstats"
},
{
"ref":"genshinstats.errors",
"url":1,
"doc":"Genshinstats errors. These take in only a single argument: msg. It's possible to add retcodes and the original api response message with  .set_reponse() ."
},
{
"ref":"genshinstats.errors.GenshinStatsException",
"url":1,
"doc":"Base Exception for all genshinstats errors."
},
{
"ref":"genshinstats.errors.GenshinStatsException.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.GenshinStatsException.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.GenshinStatsException.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.GenshinStatsException.msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.NotLoggedIn",
"url":1,
"doc":"Cookies have not been provided."
},
{
"ref":"genshinstats.errors.NotLoggedIn.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.NotLoggedIn.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.NotLoggedIn.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.AccountNotFound",
"url":1,
"doc":"Tried to get data with an invalid uid."
},
{
"ref":"genshinstats.errors.AccountNotFound.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.AccountNotFound.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.AccountNotFound.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.DataNotPublic",
"url":1,
"doc":"User hasn't set their data to public."
},
{
"ref":"genshinstats.errors.DataNotPublic.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.DataNotPublic.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.DataNotPublic.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.CodeRedeemException",
"url":1,
"doc":"Code redemption failed."
},
{
"ref":"genshinstats.errors.CodeRedeemException.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.CodeRedeemException.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.CodeRedeemException.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.RedeemCooldown",
"url":1,
"doc":"Can claim codes only every 5 seconds."
},
{
"ref":"genshinstats.errors.RedeemCooldown.cooldown",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.RedeemCooldown.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.SignInException",
"url":1,
"doc":"Sign-in failed"
},
{
"ref":"genshinstats.errors.SignInException.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.SignInException.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.SignInException.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.AlreadySignedIn",
"url":1,
"doc":"Already signed in, cannot sign in again."
},
{
"ref":"genshinstats.errors.AlreadySignedIn.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.AlreadySignedIn.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.AlreadySignedIn.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.GachaLogException",
"url":1,
"doc":"Base GachaLog Exception."
},
{
"ref":"genshinstats.errors.GachaLogException.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.GachaLogException.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.GachaLogException.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.InvalidAuthkey",
"url":1,
"doc":"An authkey is invalid."
},
{
"ref":"genshinstats.errors.InvalidAuthkey.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.InvalidAuthkey.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.InvalidAuthkey.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.AuthKeyTimeout",
"url":1,
"doc":"An authkey has timed out."
},
{
"ref":"genshinstats.errors.AuthKeyTimeout.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.AuthKeyTimeout.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.AuthKeyTimeout.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.MissingAuthKey",
"url":1,
"doc":"No gacha authkey was found."
},
{
"ref":"genshinstats.errors.MissingAuthKey.retcode",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.MissingAuthKey.orig_msg",
"url":1,
"doc":""
},
{
"ref":"genshinstats.errors.MissingAuthKey.set_response",
"url":1,
"doc":"Adds an optional response object to the error.",
"func":1
},
{
"ref":"genshinstats.errors.raise_for_error",
"url":1,
"doc":"Raises a custom genshinstats error from a response.",
"func":1
},
{
"ref":"genshinstats.gachalog",
"url":2,
"doc":"Genshin Impact gacha pulls log. Gets pull data from the current banners in basic json. Requires an auth key that can be gotten from an output_log.txt file."
},
{
"ref":"genshinstats.gachalog.extract_authkey",
"url":2,
"doc":"Extracts an authkey from the provided string. Returns None if not found.",
"func":1
},
{
"ref":"genshinstats.gachalog.get_authkey",
"url":2,
"doc":"Gets the query for log requests. This will either be done from the logs or from a tempfile.",
"func":1
},
{
"ref":"genshinstats.gachalog.get_all_gacha_ids",
"url":2,
"doc":"Gets all gacha ids from a log file. You need to open the details of all banners for this to work.",
"func":1
},
{
"ref":"genshinstats.gachalog.set_authkey",
"url":2,
"doc":"Sets an authkey for log requests. passing in authkey will simply save it, passing in a url will take the authkey out of it, passing in a logfile will search it, otherwise searches the logs and a tempfile.",
"func":1
},
{
"ref":"genshinstats.gachalog.fetch_gacha_endpoint",
"url":2,
"doc":"Fetch an enpoint from mihoyo's gacha info. Takes in an endpoint url which is joined with the base url. If an autheky is provided, it uses that authkey specifically. A request is then sent and returns a parsed response. Includes error handling and getting the authkey.",
"func":1
},
{
"ref":"genshinstats.gachalog.get_gacha_types",
"url":2,
"doc":"Gets possible gacha types. Returns a list of dicts.",
"func":1
},
{
"ref":"genshinstats.gachalog.recognize_gacha_type",
"url":2,
"doc":"Recognizes a given gacha type by id, key or name.",
"func":1
},
{
"ref":"genshinstats.gachalog.get_gacha_log",
"url":2,
"doc":"Gets the gacha pull history log. Needs a gacha type, this must be the key (for example 301). Possible gacha types can be found in the return of get_gacha_types(). Yields instead of returning, since it's paginated. May return less than size when size is too big. If size is not set it will yield until it runs out of items. To be able to get history starting from somewhere other than the earliest pull, you must pass in the id of the first pull before (chronologically after) the one you want to start from as end_id.",
"func":1
},
{
"ref":"genshinstats.gachalog.get_entire_gacha_log",
"url":2,
"doc":"Gets the entire gacha pull history log. Basically same as running get_gacha_log() with every possible key. Will yield pulls from most recent to oldest.",
"func":1
},
{
"ref":"genshinstats.gachalog.get_gacha_items",
"url":2,
"doc":"Gets the list of items that can be gotten from the gacha. Returns a list of avalible characters and weapons. To get more info about a specific item use its id.",
"func":1
},
{
"ref":"genshinstats.gachalog.get_gacha_details",
"url":2,
"doc":"Gets details of a specific gacha banner. This requires a specific gacha banner id. These keep rotating so you need to find them yourself or run get_all_gacha_ids(). example standard wish: \"a37a19624270b092e7250edfabce541a3435c2\" Change the language of the output with lang, possible langs can be found with get_langs() under the value field. The newbie gacha has no json resource tied to it, so you can't get info about it.",
"func":1
},
{
"ref":"genshinstats.gachalog.get_uid_from_authkey",
"url":2,
"doc":"Gets a uid from an authkey. If an authkey is not passed in uses the currently set authkey.",
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
"doc":"Basic configuration function, required for anything beyond search. ltuid and ltoken must be copied from your browser's cookies. Any other kwargs provided will be also set as as a cookie.",
"func":1
},
{
"ref":"genshinstats.genshinstats.set_cookie_header",
"url":3,
"doc":"Like set_cookie, but you can set the header directly.",
"func":1
},
{
"ref":"genshinstats.genshinstats.set_cookie_auto",
"url":3,
"doc":"Like set_cookie, but gets the cookies by itself. Requires the module browser-cookie3 Be aware that this process can take up to 10 seconds, so it should be ran only once. To speed it up select a browser. If a specifc browser is set, gets data from that browser only. Avalible browsers: chrome, chromium, opera, edge, firefox",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_ds_token",
"url":3,
"doc":"Creates a new ds token. Uses an MD5 hash with a unique salt.",
"func":1
},
{
"ref":"genshinstats.genshinstats.fetch_endpoint",
"url":3,
"doc":"Fetch an enpoint from the hoyolabs API. Takes in an endpoint url which is joined with the base url. A request is then sent and returns a parsed response. Includes error handling and ds token renewal. Can specifically use the chinese base url and request data for chinese users, but that requires being logged in as that user.",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_user_info",
"url":3,
"doc":"Gets game user info of a user based on their uid. Game user info contain the main information regarding a user. Contains owned characters, stats, city and world explorations and role.",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_characters",
"url":3,
"doc":"Gets characters of a user set by their ids. Characters contain info about their level, constellation, weapon, and artifacts. Talents are not included. Change the language with lang, possible langs can be found with get_langs() under the value field.",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_all_characters",
"url":3,
"doc":"Gets all characters of a user. Characters contain info about their level, constellation, weapon, and artifacts. Talents are not included. Change the language with lang, possible langs can be found with get_langs() under the value field.",
"func":1
},
{
"ref":"genshinstats.genshinstats.get_spiral_abyss",
"url":3,
"doc":"Gets how far the user has gotten in spiral abyss and their season progress. Spiral abyss info contains their progress, stats and individual completes. Every season these stats refresh and you can get the previous stats with  previous .",
"func":1
},
{
"ref":"genshinstats.hoyolab",
"url":4,
"doc":"Wrapper for the hoyolab.com community api. Can search users, get record cards, active players ."
},
{
"ref":"genshinstats.hoyolab.search",
"url":4,
"doc":"Searches all users. Can return up to 20 results, based on size.",
"func":1
},
{
"ref":"genshinstats.hoyolab.check_in",
"url":4,
"doc":"Checks in the user who's cookies are currently being used. This will give you points on hoyolab's site.",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_langs",
"url":4,
"doc":"Gets a list of languages.",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_game_accounts",
"url":4,
"doc":"Gets all game accounts of the currently signed in player. Can get accounts both for global and china.",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_record_card",
"url":4,
"doc":"Gets a game record card of a user based on their community uid. A record card contains data regarding the stats of a user for their displayed server. Their UID for a given server is also included. In case the user has set their profile to be private, returns None. You can get community id with  search .",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_uid_from_community",
"url":4,
"doc":"Gets a uid with a community uid. This is so it's possible to search a user and then directly get the uid. In case the uid is private, returns None.",
"func":1
},
{
"ref":"genshinstats.hoyolab.redeem_code",
"url":4,
"doc":"Redeems a gift code for the currently signed in user. Api endpoint for https: genshin.mihoyo.com/en/gift. The code will be redeemed for every avalible account, specifying the uid will claim it only for that account. Returns the amount of users it managed to claim codes for. Claiming code for every account will take 5s per account because of cooldowns. This can be disable completely by setting sleep to False. Currently codes can only be claimed for global accounts, not chinese.",
"func":1
},
{
"ref":"genshinstats.hoyolab.get_active_players",
"url":4,
"doc":"Gets a list of recommended active players When page size is None, gets all avalible active players.",
"func":1
},
{
"ref":"genshinstats.pretty",
"url":5,
"doc":"Prettifiers for genshinstats api returns. Fixes the huge problem of outdated field names in the api, that were leftover from during development"
},
{
"ref":"genshinstats.pretty.prettify_user_info",
"url":5,
"doc":"Returns a prettified version of get_user_info.",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_spiral_abyss",
"url":5,
"doc":"Returns a prettified version of get_spiral_abyss.",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_character",
"url":5,
"doc":"Returns a prettified version of a single item from get_characters.",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_characters",
"url":5,
"doc":"Returns a prettified version of get_characters.",
"func":1
},
{
"ref":"genshinstats.pretty.prettify_gacha_log",
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
"ref":"genshinstats.pretty.prettify_gacha_details",
"url":5,
"doc":"",
"func":1
},
{
"ref":"genshinstats.signin",
"url":6,
"doc":"Automatic sign-in for hoyolab's daily rewards. Automatically claims the next reward in the daily check-in rewards."
},
{
"ref":"genshinstats.signin.get_daily_reward_info",
"url":6,
"doc":"Fetches daily award info for the currently logged-in user.",
"func":1
},
{
"ref":"genshinstats.signin.get_daily_rewards",
"url":6,
"doc":"Gets claimed awards for the currently logged-in user",
"func":1
},
{
"ref":"genshinstats.signin.sign_in",
"url":6,
"doc":"Signs into hoyolab and claims the daily rewards. Chinese and global servers work a bit differently, so you must specify you want to claim rewards for chinese accounts here. If the reward cannot be claimed, no claim will be attempted. To force the request use force. Returns whether sign-in was successful",
"func":1
},
{
"ref":"genshinstats.utils",
"url":7,
"doc":"Various utility functions for genshinstats."
},
{
"ref":"genshinstats.utils.recognize_server",
"url":7,
"doc":"Recognizes which server a UID is from.",
"func":1
},
{
"ref":"genshinstats.utils.is_game_uid",
"url":7,
"doc":"Recognizes whether the uid is a game uid.",
"func":1
},
{
"ref":"genshinstats.utils.is_chinese",
"url":7,
"doc":"Recognizes whether the server/uid is chinese.",
"func":1
},
{
"ref":"genshinstats.utils.get_output_log",
"url":7,
"doc":"Find and return the Genshin Impact output log. None if not found.",
"func":1
}
]