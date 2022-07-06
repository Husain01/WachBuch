import { addToWatchLater, removeFromWatchLater } from "../services/watchLaterService/watchLaterService";

export const watchLaterHandler = (dispatch, video, token) => {
    const { _id, inWatchLater } = video;
    inWatchLater?removeFromWatchLater(dispatch, _id, token):addToWatchLater(dispatch, video, token);
  }