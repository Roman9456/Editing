import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, cancelEdit, saveService } from '../actions/actionCreators';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './css/ServiceAdd.css';

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleReset = () => {
    dispatch(cancelEdit());
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!item.edit.status) {
      dispatch(addService(item.name, item.price));
    } else {
      dispatch(saveService(item.edit.id, item.name, item.price));
      dispatch(cancelEdit());
    }
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  };

  return (
    <Form onSubmit={handleSubmit} onReset={handleReset} className='service-add-form'>
      <Row className='mb-3'>
        <Form.Group as={Col}>
          <Form.Control
            placeholder='Enter name'
            name='name'
            value={item.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control
            type='number'
            placeholder='Enter price'
            name='price'
            value={item.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} className='d-flex justify-content-end align-items-center'>
          {item.edit.status ? (
            <>
              <Button variant='success' className='me-2' type='submit' title="Save">
                <i className='bi bi-save'></i>
              </Button>
              <Button variant='danger' type='reset' title="Cancel">
                <i className='bi bi-x-circle'></i>
              </Button>
            </>
          ) : (
            <Button variant='primary' type='submit' title="Add">
              <i className='bi bi-plus-circle'></i>
            </Button>
          )}
        </Form.Group>
      </Row>
    </Form>
  );
}