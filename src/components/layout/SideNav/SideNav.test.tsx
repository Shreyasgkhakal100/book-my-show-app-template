const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

describe('SideNav', () => {
    it('should call history.push on click on dashboard', async () => {
        // renderWithRouter(<SideNav />);
        // userEvent.click(screen.getByText('Dashboard'));
        // expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
});
