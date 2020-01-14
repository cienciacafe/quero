import style from './style.scss'

const VideoPlayer = () => {
  return (
    <div className={style.container}>
      <div className={style.player}>
        {/* <iframe
        src="https://www.youtube.com/embed/hJVdvLyDjJA"
        frameBorder="0"

        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> */}
        <iframe
          src="https://www.youtube-nocookie.com/embed/hJVdvLyDjJA?controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoPlayer
