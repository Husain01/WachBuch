import axios from "axios"

export const createNewPlaylist = (dispatch, name, token, setShowInput) => {
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
            setShowInput(false); 
            playlists && dispatch({
                type: "PLAYLIST",
                payload: playlists,
            })
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

export const addVideoToPlaylist = (dispatch, id, video, token) => {
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
        })();
    } catch (error) {
        console.log("Error in adding video to playlist handler", error);
    }
};

export const removeVideoFromPlaylist = (dispatch, id, videoId, token) => {
    console.log(id, videoId, token);
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
        })();
    } catch (error) {
        console.log('Error in removing video from playlist handler', error);
    }
}