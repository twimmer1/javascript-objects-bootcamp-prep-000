<<<<<<< HEAD
var playlist = { "Strokes": "Reptilia", "Beck": "Wow", "Sugar Hill Gang": "Rapper's Delight"}

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return removeFromPlaylist
}
=======
Object.assign({}, playlist, artistName, songTitle)
>>>>>>> 284c941595e4c460b3e65c0aa0b1ae69b48f4ec2
