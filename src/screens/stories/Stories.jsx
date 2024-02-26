import { useContext, useEffect } from "react"
import NewsContext from "../../context/NewsContext"


const Stories = () => {
    const { hits, nbPages, isLoading } = useContext(NewsContext);
    // console.log("nbPages", hits);

    // const API = "http://hn.algolia.com/api/v1/search?query=html";
    // let isLoading = true;

    // const fetchAPI = async (url) => {
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         console.log(data);

    //         isLoading = false;
    //         console.log(isLoading);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }
    // useEffect(() => {
    //     fetchAPI(API);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    if (isLoading) {
        return (<><div>Loading....</div></>)
    }
    return (
        <>
            <div>Stories</div>
            {hits.map((value, index) => {
                // return <h6 key={index}>{value.title} and {index}</h6>
                // const {}
                return <>
                    <div className="card">
                        <h3>{value.title}</h3>
                        <p>
                            By <span>{value.author}</span> | <span>{value.num_comments}</span> comments
                        </p>
                        <div className="card_button">
                            <a href={value.url} target="_blank">Read more</a>
                            <a href="#">Remove</a>
                        </div>
                    </div>
                </>

            })}


        </>
    )
}

export default Stories
