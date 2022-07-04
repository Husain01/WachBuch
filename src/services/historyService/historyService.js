import axios from "axios";
import { MdHorizontalSplit } from "react-icons/md";

export const addToHistory = (dispatch, video, token) => {
  try {
    (async () => {
        const {
          data: { history },
        } = await axios.post(
          "/api/user/history",
          {
            video,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        history &&
          dispatch({
            type: "ADD_TO_HISTORY",
            payload: history,
          });
      })();
  } catch (error) {
    console.log("Error in add to history handler", error);
  }
};

export const removeFromHistory = (dispatch, id, token) => {
    try {
        (async () => {
            const {
                data: {history},
            } = await axios.delete(`/api/user/history/${id}`, {
                headers: {
                    authorization: token,
                },
            });
            history && dispatch({
                type: "REMOVE_FROM_HISTORY",
                payload: history,
            })
        })();
    } catch (error) {
        console.log("Error in remove from history handler", error);
    }
};

export const clearHistory = (dispatch, token) => {
    try {
        (async () => {
            const {
                data: {history},
            } = await axios.delete("api/user/history/all", {
                headers: {
                    authorization: token
                },
            });
            history && dispatch({
                type: "CLEAR_HISTORY",
                payload: history,
            })
        })();
    } catch (error) {
        console.log("Error in clear history handler", error)
    }
}