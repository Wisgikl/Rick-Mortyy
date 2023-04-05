import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'


const Nav = ({onSearch}) => {
    return (
       <div>
          <SearchBar onSearch={onSearch}/>
            <button>
               <Link to='/about'>ABOUT</Link>
            </button>

            <button>
            <link to='/home'>Home</link>
            </button>
       </div>
    );
 }
 export default Nav;