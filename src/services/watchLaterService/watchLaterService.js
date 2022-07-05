import axios from "axios";

export const addToWatchLater = (dispatch, video, token) => {
  try {
    (async () => {
      const {
        data: { watchlater },
      } = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      watchlater &&
        dispatch({
          type: "WATCH_LATER",
          payload: watchlater,
        });
    })();
  } catch (error) {
    console.log("Error in add to watchLater handler", error)
  }
};

export const removeFromWatchLater = (dispatch, id, token) => {
    try {
        (async () => {
            const {
                data: { watchlater },
            } = await axios.delete(`api/user/watchlater/${id}` ,
            {
                headers: {
                    authorization: token,
                },
            }) 
            watchlater && dispatch({
                type: "WATCH_LATER",
                payload: watchlater,
            })
        })();
    } catch (error) {
        console.log("Error in remove from watchLater handler", error)
    }
}

export const clearWatchLater = (dispatch, token) => {
    try {
        (async () => {
            const {
                data: { watchlater },
            } = await axios.delete("api/user/watchlater/all", {
                headers: {
                    authorization: token,
                },
            })
            watchlater && dispatch({
                type: "WATCH_LATER",
                payload: watchlater,
            })
        })();
    } catch (error) {
        console.log("Error in clear watchLater handler", error)
    }
}