import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

export default function ModalVideo(...props) {
  const { videoId } = props[0];

  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal((prev) => !prev);
  };

  const spinner = () => {
    setVideoLoading((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", modal);
  }, [modal]);

  return (
    <div className="App">
      <button
        onClick={openModal}
        className="text-white flex items-center gap-x-5 cursor-pointer transition"
      >
        <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]">
          {/* inner */}
          <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
            <div className="pl-1">
              <FaPlay />
            </div>
          </div>
        </div>
        {/* btn text */}
        <div className="font-primary uppercase tracking-[0.1em]">Megnézem</div>
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
    </div>
  );
}
