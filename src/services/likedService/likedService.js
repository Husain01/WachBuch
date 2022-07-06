import axios from "axios"

export const addToLiked = (dispatch, video, token) => {
    try {
        (async () => {
            const {
                data: {likes},
            } = await axios.post("api/user/likes" ,
            {video},
            {headers: {
                authorization: token,
            }
        })
        likes && dispatch({
            type: "LIKE",
            payload: likes,
        })
        })();
    } catch (error) {
        console.log("Error in add to likes handler", error)
    }
};

export const removefromLiked = (dispatch, id, token) => {
    try {
        (async () => {
            const {
                data: {likes},
            } = await axios.delete(`api/user/likes/${id}`, {
                headers: {
                    authorization: token,
                },
            })
            likes && dispatch({
                type: "LIKE",
                payload: likes,
            })
        })();
    } catch (error) {
        console.log("Error in remove from liked handler", error);
    }
}