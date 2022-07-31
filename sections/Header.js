import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header = () => (
  <Jumbotron className='mt-5'>

    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
                <img className="img-fluid" src="/Talin.jpg" />
            </div>
            <div className="col-md-6">
	    	<a className='target' id='home'/>
		<h1 className='h1 text-center anchor font-weight-bold'>LASD@<a href='https://www.sigapp.org/sac/sac2023/'>SAC'23</a></h1>
    		<h2 className='text-center h3 py-3'>Track on <strong>Lean and Agile Software Development</strong></h2>
    		<h3 className='text-center h4 pb-3'>at the 38th ACM/SIGAPP Symposium On Applied Computing</h3>
    		<h4 className='text-center h5'>March 27 - April 2, 2023</h4>
    		<h4 className='text-center h5'>Tallinn, Estonia</h4>
            </div>
        </div>
    </div>

  </Jumbotron>
)

export default Header
