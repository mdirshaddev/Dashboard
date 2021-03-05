// static files
import pic from '../../assets/images/Irshad.jpg'
import './index.scss'

export default function Header(){
  return(
    <div className="header-main">
      <div className="header-content">
        <div className="grid-intro">
          <img src={pic} alt="Md Irshad"/>
          <div className="bar"></div>
          <h1 className="name">Md Irshad</h1>
        </div>
        <div className="grid-quote">
          An aspiring full stack developer with the desire to learn and grow and currently pursuing engineering in Information Technology. I am eager to learn new technologies and tools to keep myself updated and also to meet the recent market demand
        </div>
        <div className="grid-social">
          
        </div>
      </div>
    </div>
  )
}