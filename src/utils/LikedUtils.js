import { addToLiked, removefromLiked } from "../services/likedService/likedService";

export const likedHandler = (dispatch, video, token) => {
    const { _id, inLiked } = video;
    inLiked ? removefromLiked(dispatch, _id, token) : addToLiked(dispatch, video, token);
}