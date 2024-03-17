import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Video = forwardRef((props, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    pause() {
      videoRef.current.pause();
    },
    play() {
      videoRef.current.play();
    },
  }));

  return (
    <video style={{ maxWidth: "100%" }} ref={videoRef}>
      <source src={props.path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef();

  return (
    <div>
      <h3>練習問題</h3>
      <p>
        useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。
      </p>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          if (playing) {
            ref.current.pause();
          } else {
            ref.current.play();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
