import { useReducer, useEffect } from 'react'
import NewsContext from './NewsContext';
import reducer from '../reducer/reducer';


const API = "http://hn.algolia.com/api/v1/search?";
const initialValues = {
    isLoading: false,
    query: "sql",
    page: 0,
    nbPages: 0,
    hits: []
}
const NewsState = (props) => {

    const [state, dispatch] = useReducer(reducer, initialValues);
    // const [text, setText] = useState("nasreen")


    // let isLoading = true;

    const fetchAPI = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const response = await fetch(url)
            const data = await response.json();
            // console.log(data);
            dispatch({
                type: "GET_STORIES", payload: {
                    hits: data.hits,
                    page: data.page,
                    nbPages: data.nbPages
                }
            })

            // state.isLoading = false;
            // console.log(isLoading);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchAPI(`${API}query=${state.query}&page=${state.page}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <NewsContext.Provider value={{ ...state }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;