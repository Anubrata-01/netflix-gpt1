import React from 'react'

const TrailerComponent = ({trailerkey}) => {
  return (
    <div className="w-full  ">
    <iframe className="rounded-lg object-fill  " src={"https://www.youtube.com/embed/" +trailerkey + "?&mute=1&controls=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
  </div>
  )
}

export default TrailerComponent