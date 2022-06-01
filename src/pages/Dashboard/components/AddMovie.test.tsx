import { mockAxios, renderWithRouter } from '@utils/test-utils';
import { AddMovie } from './AddMovie';
import { fireEvent, screen, waitFor } from '@testing-library/react';

describe('AddMovies', () => {
    let mockGetMovies;

    beforeEach(() => {
        mockGetMovies = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render properly', () => {
        const { container } = renderWithRouter(<AddMovie getMovies={mockGetMovies} />);
        expect(container).toMatchSnapshot();
    });

    it('should call mockGetMovies at onClick event at button if post request is complete', async () => {
        mockAxios.onPost('/api/movies').reply(200);
        renderWithRouter(<AddMovie getMovies={mockGetMovies} />);
        const button = screen.getByText('Add Movie');
        fireEvent.click(button);
        await waitFor(() => {
            expect(mockGetMovies).toHaveBeenCalled();
        });
    });

    it('should not call mockGetMovies at onClick event at button if post request sends error', async () => {
        mockAxios.onPost('/api/movies').reply(400);
        renderWithRouter(<AddMovie getMovies={mockGetMovies} />);
        const button = screen.getByText('Add Movie');
        fireEvent.click(button);
        await waitFor(() => {
            expect(mockGetMovies).not.toHaveBeenCalled();
        });
    });
});
