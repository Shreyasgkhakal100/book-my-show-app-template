import { render } from '@testing-library/react';
import Header from '../Header';
import { PageContent } from '../PageContent/PageContent';
import { PageLayout } from './PageLayout';

describe('PageLayout component', () => {
    it('should render properly', () => {
        render(
            <PageLayout>
                <Header />
                <PageContent>
                    <div>Success</div>
                </PageContent>
            </PageLayout>
        );
        // expect(container).toHaveTextContent('Success');
    });
});
