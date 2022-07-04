import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { videoReducer } from '../../Reducers/Video/videoReducer';

const DataContext = createContext();

const initialState = {
    videos: [],
    category: [],
    sortBy: "",
    search: "",
}

const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(videoReducer, initialState);
    
    useEffect(() => {
        (async () => {
          try {
            const {
              data: { categories },
            } = await axios.get("/api/categories");
            dispatch({
              type: "INIT_CATEGORIES",
              payload: [...categories],
            });
    
            const {
              data: { videos },
            } = await axios.get("/api/videos");
            dispatch({
              type: "INIT_VIDEOS",
              payload: [...videos],
            });
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);

    return (
        <DataContext.Provider value={{
            videos: state.videos,
            category: state.category,
            sortBy: state.sortBy,
            dispatch: dispatch,
            search: state.search,
        }}>
            {children}
        </DataContext.Provider>
    )

}

const useData = () => useContext(DataContext);

export {useData, DataProvider};