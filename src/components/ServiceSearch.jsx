import { useDispatch } from 'react-redux';
import { searchService } from '../actions/actionCreators';
import Form from 'react-bootstrap/Form';

export default function ServiceSearch() {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(searchService(value));
  }

  return (
    <Form className='mt-3'>
      <Form.Group>
        <Form.Control
          placeholder='Search...'
          name='name'
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}