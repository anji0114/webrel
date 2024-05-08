import renderer from 'react-test-renderer';
import { Card } from '.';

test('Card snapshot', () => {
  const tree = renderer
    .create(<Card as='div'>カードコンポーネント</Card>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
