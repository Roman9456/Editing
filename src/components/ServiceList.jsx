import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../actions/actionCreators';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Подключение иконок Bootstrap
import './css/ServiceList.css';

export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
  };

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <ListGroup className='service-list mt-3'>
      {items.map(o => (
        <ListGroup.Item key={o.id} className='d-flex justify-content-between align-items-center'>
          <span className='item-info'>{o.name} - {o.price} ₽</span>
          <div>
            <Button variant='secondary' className='btn-edit me-2' onClick={() => handleEdit(o.id, o.name, o.price)} title="Edit">
              <i className='bi bi-pencil'></i>
            </Button>
            <Button variant='danger' className='btn-delete' onClick={() => handleRemove(o.id)} title="Delete">
              <i className='bi bi-trash'></i>
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}