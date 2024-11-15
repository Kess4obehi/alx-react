import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';  // Adjust the import if your path is different

describe('Notifications Component', () => {
  test('renders without crashing', () => {
    render(<Notifications />);  // This renders the Notifications component
  });

  test('renders three list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');  // Find all list items
    expect(listItems).toHaveLength(3);  // Ensure there are 3 list items
  });

  test('renders the text Here is the list of notifications', () => {
    render(<Notifications />);
    const text = screen.getByText(/Here is the list of notifications/i);  // Find this text
    expect(text).toBeInTheDocument();  // Ensure the text exists
  });
});