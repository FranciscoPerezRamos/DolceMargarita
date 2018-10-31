package entitiesTest;

import backend.entities.pedido.Cliente;
import backend.entities.pedido.Pedido;
import backend.entities.chocolates.Chocolate;
import backend.entities.chocolates.Forma;
import backend.entities.chocolates.TipoChocolate;
import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class PedidosTest {

    public Chocolate choco1;
    public Chocolate choco2;
    public Cliente marge;

    @Before
    public void setUp(){
        choco1 = new Chocolate(Forma.FIGURA, TipoChocolate.SEMIAMARGO, 100);
        choco2 = new Chocolate(Forma.HUEVO, TipoChocolate.BLANCO, 500);
        marge = new Cliente(20365694,"Marge Simpson", 12345678, "Avenida Siempreviva 742", "marge@gmail.com");
    }

    @Test
    public void elPrecioDeUnPedidoEsLaSumatoriaDeLosPreciosDeCadaChocolate(){
        Pedido pedido = new Pedido(marge);
        pedido.agregarChocolate(choco1);
        pedido.agregarChocolate(choco2);

        assertEquals(pedido.getPrecio(), (choco1.precio() + choco2.precio()));
    }

    @Test
    public void unPedidoConoceASuCliente(){
        Cliente cliente = new Cliente(20365694,"Juan Lopez", 1159967734, "calle 6 numero 5049", "juanlopez@gmail.com");
        Pedido pedido = new Pedido(marge);


        assertEquals(pedido.getDNICliente(), marge.getDni());
    }
}
