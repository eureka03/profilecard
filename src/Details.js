import './details.css';
import eureka from './picture.png';
import Skills from './Skills'
export default function Details(){
    return(
        <div className='details'>
            <div className='image'><img src={eureka} alt='jonas schmedtmann'/></div>
            <div className="resume">
                <div className="name">
                    <h1>Eureka Baloyi</h1>
                </div>
                <div className="detailed-info">
                    <p>Front-end web developer and gym freak
                        When not coding or working out , I like
                        to play board games, to cook(and eat), or
                        to just enjoy the portuguese sun at the beach.
                    </p>
                </div>
                <div className="skill-list">
                    
                        <Skills name='HTML+CSS' color='orange'/>
                        <Skills name='Javascript' color="yellow"/>
                        <Skills name='Git and github' color='red'/>
                        <Skills name='React' color='blue'/>
                    
                </div>
            </div>
        </div>
    );
}