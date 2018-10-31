package daoTest;

import backend.dao.PedidoDAO;
import backend.entities.pedido.Cliente;
import backend.entities.pedido.Pedido;
import backend.entities.chocolates.Chocolate;
import backend.entities.chocolates.TipoChocolate;
import backend.runner.Runner;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

import static backend.entities.chocolates.Forma.HUEVO;
import static backend.entities.chocolates.TipoChocolate.BLANCO;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static sun.misc.Version.println;

public class PedidoDAOTest {

    private Pedido pedido1;
    private Pedido pedido2;
    private Chocolate chocolateBlanco;
    private Chocolate chocolateConLeche;
    private PedidoDAO pedidoDAO;
    private Cliente marge;

//    @After
//    public void cleanUp(){
//        SessionFactoryProvider.destroy();
//    }

    @Before
    public void setUp(){
        chocolateBlanco = new Chocolate(HUEVO, BLANCO,100);
        chocolateConLeche = new Chocolate(HUEVO, TipoChocolate.CONLECHE,100);

        marge = new Cliente(20365694,"Marge Simpson", 12345678, "Avenida Siempreviva 742", "marge@gmail.com");
        pedido1 = new Pedido(marge);
        pedido2 = new Pedido(marge);

        pedido1.agregarChocolate(chocolateBlanco);
        pedido2.agregarChocolate(chocolateConLeche);


        pedidoDAO = new PedidoDAO();
    }

    @Test
    public void recuperoUnChocolateBlanco(){
        Runner.runInSession(() -> {

            pedidoDAO.guardar(pedido1);

            Pedido pedidoRecuperado = pedidoDAO.recuperar(pedido1.getId());

            assertEquals(pedidoRecuperado.getChocolates().size(), pedido1.getChocolates().size());

            return null;
        });
    }

    @Test
    public void veoTodosLosPedidosDeUnCliente(){
        Runner.runInSession(() -> {

            pedidoDAO.guardar(pedido1);
            pedidoDAO.guardar(pedido2);

            List<Pedido> pedidosMarge = pedidoDAO.getPedidosDeCliente(marge.getDni());

            assertEquals(2, pedidosMarge.size());
            assertEquals(pedidosMarge.get(0).getDNICliente(), marge.getDni());
            assertEquals(pedidosMarge.get(1).getDNICliente(), marge.getDni());

            return null;
        });
    }

}


