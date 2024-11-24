import { redirect } from 'next/navigation';

const MovieRedirect = () => {
    redirect('/movies/1');
};

export default MovieRedirect;
