import React from 'react';
import '../dist/LoginDm.css';
import Carousel from 'nuka-carousel';
import Ionicon from 'react-ionicons';
import { Link } from 'react-router-dom';





class LoginDM extends React.Component {

  startHome() {
    this.props.history.push('/home');
  }
  


  renderImg(link, description) {
    return(
      <div align="center">
        <img src={link}  alt={description}/>
      </div>
    );
  }

  renderTitle(title) {
    return(
      <h1>
        {title}    
      </h1>
    );
  }

  renderTextForLogdinDM() {
    return(
      <h5 className="form-headin2">
        Dolce Margarita nace el 10 de julio de 2012 en la ciudad de Berazategui, por iniciativa Elisabet Tassiello.
        Fuimos inicialmente concebidos como un hobby, pero en el año 2013 decidimos emprender en la venta de chocolates, logrando de esta manera conformar una variada gama de productos para satisfacer las necesidades de los clientes.
        Gradualmente nos fuimos expandiendo por todo el territorio de nuestro país, trayendo la mejor experiencia posible.
        Dolce Margarita no es solo chocolate, es una experiencia.
      </h5>
    );
  }
  renderGoogleButton(text) {
    return(
      <button
      className="btn-dm"
      type="button"
      onClick={() => this.googleLogin()}
    >
        {text}
    </button>
    );
  }
  renderButtonWithFunction(text) {
    return(
      <button
      className="btn-dm"
      type="button"
      onClick={() => this.startHome()}
    >
        {text }
        
    </button>
    );
  }

  renderCarousel() {
    return(
      <Carousel width="600px" wrapAround="true" transitionMode="fade" framePadding="10px">
          <img src='https://www.explorecornwallapp.com/media.ashx/counter-w_870_489.jpg' className="img-sizes" alt="Fabrica de chocolate" />
          <img src='https://schrammsflowers.com/wp-content/uploads/2017/12/chocolate.jpg' className="img-sizes" alt="Fabrica de chocolate" />
          <img src='https://i1.wp.com/www.noticiasbrown.com/wp-content/uploads/2018/03/chocolate-amargo.jpg?fit=645%2C429' className="img-sizes" alt="Fabrica de chocolate" />
      </Carousel> 
    );
    
  }



  renderContent() {
    return(
      <div className="loging-dm flex">
        <div className="main-div">
          <div>
            {this.renderTitle('Dolce margarita')}
            {this.renderTextForLogdinDM()}
          </div>
          <Link to="/login">              
          
          <button  type="button" className="btn-dm">Registrarse <Ionicon icon="logo-google" fontSize="25px" /></button>
          </Link>
          {this.renderButtonWithFunction('Empezar')}
          
        </div>
        {this.renderCarousel()}
      </div>
    );
  }

  renderFoot() {
    return(
      <div>
        <Ionicon icon="logo-facebook" color="blue
        "/>  
        <a href="https://www.facebook.com/dolce.margarita/" className="a">
          @dolce.margarita
        </a>
      </div>
    );
  }

  render() {
    return (
        <div>
          {this.renderImg('https://cdn.discordapp.com/attachments/499372006782009345/513852433496014853/dmLOGO.png',
            'Logo de DM')}
          {this.renderContent()}
          {this.renderFoot()}
        </div>
    );
  }
}

export default LoginDM;
