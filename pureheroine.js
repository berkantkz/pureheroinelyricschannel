var request = require('request');
var botApiKey = process.env.BOTAPIKEY;

var songList = ["tennis_court", "400_lux", "royals", "ribs", "buzzcut_season", "team", "glory_and_gore", "still_sane", "white_teeth_teens", "a_world_alone"];
lyrics = {
    "0" : ["Don't you think that it's borin' how people talk?", "But I know they'll never own me", "Baby, be the class clown", "It's a new art form, showin' people how little we care", "We're so happy, even when we're smilin' out of fear", "Let's go down to the tennis court\nAnd talk it up like yeah", "But my head's fillin' up fast with the wicked games, up in flames", "Everything's cool when we're all in line for the throne", "I fall apart with all my heart", ],
    "1" : ["We're never done with killing time\nCan I kill it with you?", "Got a lot to not do", "You pick me up and take me home again", "We're hollow like the bottles that we drain", "We might be hollow, but we're brave", "_And I like you_", "I'd like it if you stayed"],
    "2" : ["We don't care\nWe're driving Cadillacs in our dreams", "We don't care\nWe aren't caught up in your love affair", "And we'll never be royals\nIt don't run in our blood\nThat kind of luxe ain't for us\nWe crave a different kind of buzz", "Let me live that fantasy"],
    "3" : ["\"Lover's Spit\" left on repeat", "It drives you crazy getting old", "We can talk it so good\nWe can make it so divine", "How you wish it would be all the time", "This dream isn't feeling sweet", "And I've never felt more alone", "It feels so scary getting old", "I want 'em back, I want 'em back\nThe minds we had, the minds we had\nHow all the thoughts, how all the thoughts\nMoved 'round our heads, moved 'round our heads", "You're the only friend I need", "Sharing beds like little kids", "And laughing 'til our ribs get tough\nBut that will never be enough"],
    "4" : ["They try to tell us all that we will lose", "I live in a hologram with you\nWe're all the things that we do for fun", "And nothing's wrong, when nothing's true", "I'm the one you tell your fears to", "There'll never be enough of us"],
    "5" : ["We've not yet lost all our graces", "Dancin' around the lies we tell\nDancin' around big eyes as well", "We live in cities you'll never see on-screen\nNot very pretty, but we sure know how to run things", "And everyone's competing for a love they won't receive"],
    "6" : ["There's a hummin' in the restless summer air", "But in all chaos there is calculation", "Droppin' glasses just to hear them break", "You've been drinkin' like the world was gonna end", "It's clear that someone's gotta go", "We mean it, but I promise we're not mean", "They lose their minds for us", "Glory and gore go hand in hand\nThat's why we're makin' headlines", "Chance is the only game I play with, baby", "We let our battles choose us", "The sun's startin' to light up when we're walking home", "Tired little laughs, gold-lie promises", "We'll always win at this, I don't ever think about death\nIt's alright if you do, it's fine", "We gladiate, but I guess we're really fighting ourselves", "Wide awake in bed, words in my brain", "Let me in the ring, I'll show you what that big word means"],
    "7" : ["Everythin' I say falls right back into everythin'", "I'm little, but I'm comin' for the crown", "I'm little, but I'm comin' for you", "Only bad people live to see", "Only bad people live to see\nTheir likeness set in stone\nWhat does that make me?"],
    "8" : ["I guess you're lucky that it's dark now", "And if I like it then we'll stay", "We got the glow in our mouths", "You'll get the picture of your dreams", "I'll let you in on something big", "I tried to join but never did", "The way they are, the way they seem is something else, it's in the blood"],
    "9" : ["I feel grown up with you in your car", "We're biting our nails, you're biting my lip\nI'm biting my tongue", "But people are talking", "They all wanna get rough, get away with it", "Let 'em talk, 'cause we're dancing in this world alone", "All my fake friends and all of their noise\nComplain about work", "Maybe the internet raised us\nOr maybe people are jerks", "You're my best friend and we're dancing in a world alone", ]
}

var song = lyrics[Math.floor(Math.random() * songList.length)];
var lyric = song[Math.floor(Math.random() * song.length)];

var uri = "https://api.telegram.org/" + botApiKey + "/sendMessage?chat_id=@pureheroinelyrics&parse_mode=markdown&text=" + "" + lyric + "";

request(uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});