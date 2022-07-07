export const videoReducer = (state, action) => {
  switch (action.type) {
    case "INIT_CATEGORIES":
      return {
        ...state,
        category: [...action.payload.map((c) => ({ ...c, isActive: false }))],
      };
    case "INIT_VIDEOS":
      return {
        ...state,
        videos: [
          ...action.payload.map((video) => ({
            ...video,
            inHistory: false,
            inWatchLater: false,
            inLiked: false, 
          }))
        ],
      };
    case "SORTBY":
      return {
        ...state,
        sortBy: action.payload,
        category: state.category.map((cat) =>
          cat.categoryName === action.payload
            ? { ...cat, isActive: true }
            : { ...cat, isActive: false }
        ),
      };
    case "SEARCH":
        return {
            ...state,
            search: action.payload,
        }
    case "HISTORY":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inHistory: action.payload.some((e)=> e._id === video._id),
        }))
      }
    case "WATCH_LATER":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inWatchLater: action.payload.some((e) => e._id === video._id)
        }))
      }
    case "LIKE":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inLiked: action.payload.some((e)=> e._id === video._id)
        }))
      }
    default:
        return {
            ...state
        }
  }
};
