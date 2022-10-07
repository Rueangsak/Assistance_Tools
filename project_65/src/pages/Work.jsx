import Presentation from '../components/work/presentation'
import Navbar1 from '../components/work/navbar1'
import './page.css'

const Work = () => {
  return (
    <div> 
      <Navbar1 rootClassName="navbar1-root-class-name"></Navbar1>
      <Presentation></Presentation>
    </div>
  );
};


export default Work;
