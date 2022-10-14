import axios from "axios"

export const createNewPlaylist = (dispatch, name, token, setShowInput, setMiniLoader) => {
    
    setShowInput(false)
    setMiniLoader(true)

    try {
        (async () => {
            const {
                data: { playlists },
            } = await axios.post("api/user/playlists",
            {
                playlist: {title: name, description: ""},
            },
            {
                headers: {
                    authorization: token,
                },
            })
             
            playlists && dispatch({
                type: "PLAYLIST",
                payload: playlists,
            })
            setTimeout(() => {
                setMiniLoader(() => false);
              }, 300);
        })();
    } catch (error) {
        console.log("Error in adding to the playlist handler", error);
    }
}

export const removePlaylist = (dispatch, id, token ) => {
    
    try {
        (async () => {
            const {
                data: { playlists }
            } = await axios.delete(`api/user/playlists/${id}`, {
                headers : {
                    authorization: token,
                },
            });
            playlists && dispatch({
                type: "PLAYLIST",
                payload: playlists,
            })
        })()
    } catch (error) {
        console.log("Error in removing from playlist handler", error);
    }
}

export const addVideoToPlaylist = (dispatch, id, video, token,setMiniLoader) => {
    setMiniLoader( true)
    try {
        (async () => {
            const {
                data: { playlist }
            } = await axios.post(`/api/user/playlists/${id}`,
            {
                video,
            },
            {
                headers: {
                    authorization: token,
                },
            });
            playlist && dispatch({
                type: "VIDEO_IN_PLAYLIST",
                payload: playlist,
            })
            setTimeout(() => {
                setMiniLoader(false);
              }, 200);
        })();
    } catch (error) {
        console.log("Error in adding video to playlist handler", error);
    }
};

export const removeVideoFromPlaylist = (dispatch, id, videoId, token,setMiniLoader) => {
    setMiniLoader(true)
    try {
        (async () => {
            const {
                data: { playlist },
            } = await axios.delete(`/api/user/playlists/${id}/${videoId}`, {
                headers :{
                    authorization: token,
                },
            });
            playlist && dispatch({
                type: "VIDEO_IN_PLAYLIST",
                payload: playlist,
            })
            setTimeout(() => {
                setMiniLoader(false);
              }, 200);
        })();
    } catch (error) {
        console.log('Error in removing video from playlist handler', error);
    }
}