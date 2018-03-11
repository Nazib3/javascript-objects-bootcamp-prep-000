
var playlist = new Object();
playlist[key] = 'value';
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
function removeFromPlaylist(playlist, artistName){

delete playlist[aritstName]
return playlist;
}
  }
