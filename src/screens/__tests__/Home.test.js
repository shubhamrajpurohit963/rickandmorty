import react from 'react';
import {render, act, fireEvent} from '../../../test-utils/test-utils';
import Home from '../Home/Home';

// basic mounting
it('should mount without error', async () => {
  render(<Home />);
});

// noData initially before api hit
it('should show no data initially', async () => {
  const HomeScreen = render(<Home />);

  // no data initially
  HomeScreen.getByTestId('noData');
});

// data arrived
it('should show flatlist after api data has arrived', async () => {
  const HomeScreen = render(<Home />);

  // no data initially
  HomeScreen.getByTestId('noData');

  await act(async () => {
    // wait for api call to complete
    setTimeout(() => {
      // hide no data
      expect(HomeScreen.queryByTestId('noData')).toBe(0);

      // load cards
      expect(HomeScreen.findAllByText('character-card').length).toEqual(10); // as the initial number to render is 10
    }, 2000);
  });
});

// navigate to detailed page
it('should show flatlist after api data has arrived', async () => {
  const HomeScreen = render(<Home />);

  // no data initially
  HomeScreen.getByTestId('noData');

  await act(async () => {
    setTimeout(() => {
      // hide no data
      expect(HomeScreen.queryByTestId('noData')).toBe(0);

      // load cards
      expect(HomeScreen.findAllByText('character-card').length).toEqual(10); // as the initial number to render is 10

      // navigate when clicked on the profile icon
      const pushMock = jest.fn();
      fireEvent.press(getByTestId('profile-icon'));
      expect(pushMock).toBeCalledWith('CharacterScreen', {
        character: null,
      });
    }, 2000); // waiting for the api to get data
  });
});
