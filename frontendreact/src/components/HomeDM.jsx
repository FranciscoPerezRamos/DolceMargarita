import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/LoginDm.css';
import { Link } from 'react-router-dom';
import API from '../service/api.js';
import Ionicon from 'react-ionicons';
import Carousel from 'nuka-carousel';
import Header from './Header.jsx';
import Flippy, { FrontSide, BackSide } from 'react-flippy'; 


export default class HomeDM extends React.Component {
 
  constructor(){
    super();
    this.state = {
      formas: [],
    }
  }

  componentDidMount() {
    API.get('/formas')
      .then(response => this.setState({ formas: response }))
      .catch(console.log);
  }

  renderLogo(link, description) {
    return(
      <div align="center">
        <img src={link}  alt={description}/>
      </div>
    );
  }
  switchTypesOfChocolates(tipoDeChocolate){
    let linkToShow;
     switch(tipoDeChocolate) {
       case "Figuras":
           linkToShow = "/forma"
           break;
 
       case "Huevos":
       linkToShow = "/tipo"
           break;
 
       case "Bombones":
        linkToShow = "/tamanio"
           break;
       
           default :  linkToShow = "/forma"
     }
    }

  renderImg(img) {
    return(
      <div align="center">
        <img src={img} alt="Productos de chocolates" width="200" height="200" />
      </div>
    );
  }


  renderCarousel() {
    return(
      <Carousel wrapAround="true" transitionMode="fade" autoplay="true" withoutControls="true ">
          <img src='https://images5.alphacoders.com/431/thumb-1920-431467.jpg' className="img-sizes" alt="Fabrica de chocolate" />
          <img src='https://schrammsflowers.com/wp-content/uploads/2017/12/chocolate.jpg' className="img-sizes" alt="Fabrica de chocolate" />
          <img src='https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-HD-Chocolate-Background-PIC-WPC006562.jpg' className="img-sizes" alt="Fabrica de chocolate" />
      </Carousel> 
    );
    
  }


  renderFlippy(item){
    return (
      <Flippy  
        flipOnHover={false}
        flipOnClick={true} 
        flipDirection="horizontal"
        ref={(r) => this.flippy = r} 
        style={{ width: '350px', height: '350px', padding: '10px'}}
        
      >
        <FrontSide
          style={{
            backgroundColor: '#FFFACD',
          }}
        >
         {this.createCardContent(item)}
        </FrontSide>
        <BackSide
          style={{ backgroundColor: '#FFFACD'}}>
         <h3 align="left">Descripcion del producto</h3>
        </BackSide>
      </Flippy>
      
    
    
      ); 
    
  }



  createCardContent(item) { 
    return (
      <div>
        {this.renderImg(item.img)}
        <div className="card-body" align="center">
          <h3 className="card-title textT">{item.nombre}</h3>
          <div className="card-text">
          <Link to="/confirm">              
              
          <span className="badge badge-secondary">Añadir a carrito</span>
          </Link>
          
             
            <Ionicon icon="md-cart" color="goldenrod" /> 
          </div>
        </div>
      </div>
    );
  }

  renderMenu() {
    return(
      <div>
        <Header />
      </div>
    );
  }


  render() {
    return (
      <div>
        <div>
        {this.renderLogo
            ('https://cdn.discordapp.com/attachments/499372006782009345/513852433496014853/dmLOGO.png',
            'Logo de DM')}
        </div>
        <div>
          {this.renderMenu()}
        </div>
        <div align="center">
          {this.renderCarousel()}
        </div>
        <div >
          <h5  className="subtitle2" > Nuestra Seleccion  </h5 >
        </div>
        <div align="center">
          <div className="flex paddingG" align="center">
            {this.state.formas.map( f => this.renderFlippy(f))}
          </div>
        </div>
      </div>
    );
  }   }
