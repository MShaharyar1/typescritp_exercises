interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist,
      title,
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Create album dictionaries using the makeAlbum function
  const album1 = makeAlbum('Artist1', 'Album Title 1');
  const album2 = makeAlbum('Artist2', 'Album Title 2', 12);
  const album3 = makeAlbum('Artist3', 'Album Title 3', 8);
  
  // Print each album's information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  