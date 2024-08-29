// redux
// import { useDispatch, useSelector } from 'react-redux';
// import changeNumber from './redux/changeNumber';
// import { SET_USER_VALUE } from './redux/actions';

// bootstrap
import Container from 'react-bootstrap/Container';

// components
import ServiceAdd from './components/ServiceAdd';
import ServiceSearch from './components/ServiceSearch';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <Container>
      <ServiceAdd />
      <ServiceSearch />
      <ServiceList />
    </Container>
  )
}

export default App;
