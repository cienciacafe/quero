import ReactPlayer from 'react-player'
import style from './style.scss'

const VideoPlayer = () => {
  return (
    <div className={style.container}>
      <div className={style.player}>
        <ReactPlayer
          className={style.reactPlayer}
          url="https://www.youtube.com/watch?v=hJVdvLyDjJA"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </div>
  )
}

export default VideoPlayer
