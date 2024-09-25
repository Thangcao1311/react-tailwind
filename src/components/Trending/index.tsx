import MovieCard from "./MovieCard"
import { moviesData } from "./MovieData"


const index = () => {
  return (
    <> 
            <h3 className="border-b border-primary mt-12 mb-5 pb-4">Trending</h3>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 ">
                {moviesData.map((moive,index ) => <MovieCard key ={index} movie = {moive} />)}
            </div>
            <div className="flex justify-center">
                <button className="btn hover:scale-125 transition ease-out duration-200 ">Load More</button>
            </div>
    </>
  )
}

export default index