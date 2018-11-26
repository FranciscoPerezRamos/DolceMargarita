import React from 'react';
import Ionicon from 'react-ionicons';
import '../dist/LoginDm.css';
import CreditCardInput from 'react-credit-card-input';


export default class LastView2 extends React.Component {
  finishSell() {
    return (
      <div>
        <h2>Su pedido se encuentra siendo procesado.
                Muchas Gracias por elegirnos
        </h2>
      </div>
    );
  }

  render() {
    return (
      <div align="center">
      <h4 align="center" className="colorWhite titleFinsh">Registro con Google <Ionicon icon="logo-googleplus" fontSize="35px" /></h4>

        
        <form>
            
            
          </form>
        <div>
        
          <form>
            <label>
               Usuario:
    <input type="text" name="Nombre y Apellido" />
            </label>
           
          </form>

         < form>
            <label>
              Contraseña:
    <input type="text" name="Nombre y Apellido" />
            </label>
           
          </form>
          

          

         



          
          
          
         
          
         
        </div>
       
          
        <div>
          
          <button
            className="colorBotton"
            type="button"
            onClick={() => this.finishSell()}
          >
            <Ionicon icon="logo-google" fontSize="35px" />
            

           Confirmar
            
            
            
          </button>
        </div>
      </div>
    );
  }
}
