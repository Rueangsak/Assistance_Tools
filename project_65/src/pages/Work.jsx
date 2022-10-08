import Presentation from '../components/work/presentation'
import Navbar1 from '../components/work/navbar1'
import './work.css'
import Add from '../components/add/Add';

const Work = () => {
  return (
    <div> 
      <Navbar1 rootClassName="navbar1-root-class-name"></Navbar1>
      <Presentation></Presentation>
      <Add></Add>
    </div>
  );
};




export default Work;
