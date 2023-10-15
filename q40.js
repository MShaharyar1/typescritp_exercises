function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create album dictionaries using the makeAlbum function
var album1 = makeAlbum('Artist1', 'Album Title 1');
var album2 = makeAlbum('Artist2', 'Album Title 2', 12);
var album3 = makeAlbum('Artist3', 'Album Title 3', 8);
// Print each album's information
console.log(album1);
console.log(album2);
console.log(album3);
