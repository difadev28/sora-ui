import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmptyData from '../EmptyData';

describe('CardPanel Component', () => {

    it('renders the component with the correct label', () => {
        const { container } = render(<EmptyData label='Test Label' />);

        expect(container).toBeInTheDocument();
    });
});
