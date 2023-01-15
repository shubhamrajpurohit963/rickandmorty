import react from 'react';
import {fireEvent, render, screen} from '../../../test-utils/test-utils';
import CharacterCard from '../CharacterCard';

// Sample data
var characterItem = {
  id: 55,
  name: 'Boobloosian',
  species: 'Alien',
  // status: 'hello',
  type: 'Boobloosian',
  gender: 'unknown',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Nuptia 4',
    url: 'https://rickandmortyapi.com/api/location/13',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/55.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/18',
    'https://rickandmortyapi.com/api/episode/21',
  ],
  url: 'https://rickandmortyapi.com/api/character/55',
  created: '2017-11-05T11:32:53.847Z',
};

// renders the component
it('should render the component', () => {
  render(<CharacterCard item={characterItem} index={0} />);
});

// passing one property null
it('should not render the missing property', async () => {
  const {queryAllByText} = render(
    <CharacterCard item={characterItem} index={0} />,
  );
  expect(queryAllByText('Status:').length).toBe(0);
});

// passing no props
it('should render nothing', async () => {
  const {queryAllByText} = render(<CharacterCard item={null} index={0} />);
  expect(queryAllByText('Boobloosian').length).toBe(0);
});

// every property passed
it('should render card with every property', async () => {
  const {queryAllByText} = render(
    <CharacterCard item={characterItem} index={0} />,
  );
  expect(queryAllByText('Boobloosian').length).toBe(2);
  expect(queryAllByText('Status:').length).toBe(0);
  expect(queryAllByText('Species:').length).toBe(1);
  expect(queryAllByText('Gender:').length).toBe(1);
});

// navigate to detailed screen
it('should navigate on details screen when button clicked', async () => {
  const pushMock = jest.fn();

  const {getByTestId} = render(
    <CharacterCard
      item={characterItem}
      index={0}
      navigation={{
        push: pushMock,
      }}
    />,
  );

  fireEvent.press(getByTestId('profile-icon'));

  expect(pushMock).toBeCalledWith('CharacterScreen', {
    character: characterItem,
  });
});
