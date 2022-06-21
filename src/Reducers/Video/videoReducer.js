export const videoReducer = (state, action) => {
    switch(action.type) {
        case "INIT_CATEGORIES":
            return {
                ...state,
                category: [...action.payload.map((c) => ({...c, isActive: false}))]
            }
        case "INIT_VIDEOS":
            return {
                ...state,
                videos: action.payload
            }
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
    }
}