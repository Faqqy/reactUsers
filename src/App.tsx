import List from './components/List';
import Details from './components/Details';
import { UserProvider } from './context/UserContext';
import './index.css';
  
export default function App() {
    
    return (
        <UserProvider>
            <div className='d-flex'>
                <List />
                <Details />
            </div>
        </UserProvider>
    );
}