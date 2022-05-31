import { render, renderWithRouter } from '@test-utils';
import { MoviesTable } from './';

const movies = [
    {
        id: 1,
        title: 'Movie 1',
        duration: 120
    },
    {
        id: 2,
        title: 'Movie 2',
        duration: 120
    },
    {
        id: 3,
        title: 'Movie 3',
        duration: 120
    }
];

describe('MoviesTable', () => {
    it('should render properly', () => {
        const { container } = renderWithRouter(<MoviesTable movies={movies} />);
        expect(container).toMatchSnapshot();
    });

    it('should render only thead & empty tbody tag for empty movies list', () => {
        const { container } = render(<MoviesTable movies={[]} />);
        expect(container).toMatchSnapshot();
    });
});
