function shout(string){
  return string.toUpperCase();
}

function logWhisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function sayHiToGrandma(string){
  if (logWhisper(string) === string){
    return "I can't hear you!";
  }else if (shout(string) === string){
    return "YES INDEED!";
  }else if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
}