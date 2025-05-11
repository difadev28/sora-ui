import { render, fireEvent } from '@testing-library/react';
import useClickOutside from '../useClickOutside';

describe('useClickOutside', () => {
  it('should call handler when clicking outside the element', () => {
    const handler = jest.fn();

    const TestComponent = () => {
      const ref = useClickOutside(handler);
      return (
        <div>
          <div ref={ref}>Inside</div>
          <div data-testid="outside">Outside</div>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    fireEvent.mouseDown(getByTestId('outside'));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should NOT call handler when clicking inside the element', () => {
    const handler = jest.fn();

    const TestComponent = () => {
      const ref = useClickOutside(handler);
      return (
        <div>
          <div ref={ref}>Inside</div>
          <div data-testid="outside">Outside</div>
        </div>
      );
    };

    const { getByText } = render(<TestComponent />);

    fireEvent.mouseDown(getByText('Inside'));

    expect(handler).not.toHaveBeenCalled();
  });
});
