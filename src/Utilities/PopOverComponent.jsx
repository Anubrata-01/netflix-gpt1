import React from 'react'
import { Popover,Pane,Button} from 'evergreen-ui'
import { useSelector } from 'react-redux'
import TrailerComponent from '../Components/MovieContainer/TrailerComponent'
const PopOverComponent = () => {
  const trailer=useSelector((store)=>store?.movie?.movieDetails?.cureentMovieTrailer?.results)
  if(!trailer){
    console.log("error")
  }
  const key=trailer?(trailer[0]?.key):"error"
    // const key=trailer[1]?.key
  return (
    <div>
        <Popover
  bringFocusInside
  content={
    <Pane
      width={320}
      height={220}
      paddingX={40}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
        <div className=''>
        <TrailerComponent trailerkey={key}/>

        </div>
      {/* <TrailerComponent  trailerkey={key}/> */}
    </Pane>
  }
>
  <Button>Watch Trailer</Button>
</Popover>
    </div>
  )
}

export default PopOverComponent