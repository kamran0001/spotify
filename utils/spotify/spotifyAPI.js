const axios = require("axios");
const qs = require("qs");

const generateToken = async () => {
  try {
    let data = qs.stringify({
        'grant_type': 'client_credentials',
        'client_id': process.env.SPOTIFY_CLIENT_ID,
        'client_secret': process.env.SPOTIFY_CLIENT_SECRET 
      });
      
      let config = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
        data : data
      };
      const resData = await axios.request(config);
      if(resData.status == 200 ) return resData.data.access_token
      return null;
  } catch (error) {
    console.log(error);
    return null
  }
};

const getISRC = async (token, isrc) => {
    try {
        let track = null;
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.spotify.com/v1/search?q=isrc:${isrc}&type=track`,
            headers: { 
              'Authorization': `Bearer ${token}`
            }
          };
        const resData = await axios.request(config);
        if(resData.status == 200) {
            const tracks = resData.data.tracks.items
            let popularity = 0;
            tracks.map( e => {
                if(e.popularity > popularity) {
                    let artist_name = [];
                    e.artists.map( ele => {
                        artist_name.push(ele.name)
                    });
                    artist_name = artist_name.toString();
                    popularity = e.popularity;
                    track = {
                        title: e.name,
                        preview_url: e.preview_url,
                        image_url: e.album.images[0]['url'],
                        artist_name: artist_name
                    }
                };
            })
        }
        return track;
    } catch (error) {
      console.log(error);
      return null
    }
  };

module.exports = {
    generateToken,
    getISRC
};
