  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }

function logShout(string) {
    console.log(string.toUpperCase()) ;
}

function logWhisper(string) {
    console.log(string.toLowerCase()) ;
}

function sayHiToHeadphonedRoommate(string) {
    var iCantHearYou = "I can't hear you!";
    var yesIndeed = "YES INDEED!";
    var iWouldLoveTo = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return iCantHearYou;
    }
        else if (string.toUpperCase(string) === string) {
            return yesIndeed;
        }
        else if ("Let's have dinner together!" === string) {
            return iWouldLoveTo; }
        }