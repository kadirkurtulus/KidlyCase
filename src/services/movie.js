import ax from './axios';


const getMovieList = async (page) => ax.get(`/movie/550/lists`, {
  params: {
    page
  }
});

const getMovieDetail = async (id) => ax.get(`/movie/${id}`);


export {
  getMovieList,
  getMovieDetail
};