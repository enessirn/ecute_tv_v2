import ButtonGroup from "./ButtonGroup";
import Carousel from "./Carousel";

function Trend() {
  const ScrooltoDown = () => {
    window.scrollBy(0,100)
  }
  return (
    <div className='select-none pt-20 w-full h-screen bg-[url("https://wallpapers.com/images/hd/breaking-bad-background-bgpiwr9axx0winnl.jpg")] bg-no-repeat bg-cover relative overflow-hidden'>
      <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
      <div className="w-full absolute bottom-5 flex flex-row items-center justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6 lg:size-10 absolute animate-bounce cursor-pointer"
          onClick={ScrooltoDown}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      
      </div>

      <div className="relative w-full md:w-[80%] mx-auto text-white pt-0 md:pt-20 px-10 flex flex-col md:flex-row">
        <div className="first-side max-w-56 md:max-w-96 mx-auto">
          <img
            src="https://i.ebayimg.com/images/g/eKEAAOxyOMdS4U2W/s-l1200.jpg"
            alt="poster-img"
            className="rounded shadow-md"
          />
        </div>
        <div className="second-side flex flex-col gap-2 items-center md:items-start md:gap-3 text-lg md:text-[30px] px-4 lg:pl-24 w-full">
          <span className="max-text-[42px] font-semibold !select-all cursor-default pt-4 md:pt-0">
            Breaking Bad
          </span>
          <span>2008</span>
          <span className="font-semibold text-lg hidden md:block">
            Lorem ipsum dolor sit amet.
          </span>
          <span className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              stroke="none"
              className="size-10 rounded"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            7/10
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              className="w-12 ml-2"
              alt="IMDB"
            />
          </span>
          <span className="mt-2 h-full text-sm lg:text-lg w-full flex-wrap text-wrap">
            An aging ex-boxer gangster working as muscle for a Boston crime boss
            receives an upsetting diagnosis. Despite a faltering memory, he
            attempts to rectify the sins of his past and reconnect with his
            estranged children. He is determined to leave a positive legacy for
            his grandson, but the criminal underworld isn’t done with him and
          </span>

          <div>
            <ButtonGroup />
          </div>
        </div>
      
      </div>
      <Carousel />
    </div>
  );
}

export default Trend;
