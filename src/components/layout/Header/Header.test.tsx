import { renderWithRouter } from '@utils/test-utils';
import { Header } from './Header';

describe('Header', () => {
    it('should render properly', () => {
        renderWithRouter(<Header />);
        // expect(container).toMatchSnapshot();
    });
});
