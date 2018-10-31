package daoTest;

import backend.dao.PedidoDAO;
import backend.entities.pedido.Cliente;
import backend.entities.pedido.Pedido;
import backend.entities.chocolates.Chocolate;
import backend.entities.chocolates.TipoChocolate;
import backend.runner.Runner;
import org.junit.Before;
import org.junit.Test;

import static backend.entities.chocolates.Forma.HUEVO;
import static backend.entities.chocolates.TipoChocolate.BLANCO;
import static org.junit.Assert.assertEquals;

public class PedidoDAOTest {

    private Pedido pedido;
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
        pedido = new Pedido(marge);
        pedido.agregarChocolate(chocolateBlanco);
        pedido.agregarChocolate(chocolateConLeche);
        pedidoDAO = new PedidoDAO();
    }

    @Test
    public void recuperoUnChocolateBlanco(){
        Runner.runInSession(() -> {

            pedidoDAO.guardar(pedido);

            Pedido pedidoRecuperado = pedidoDAO.recuperar(pedido.getId());

            assertEquals(pedidoRecuperado.getChocolates().size(), pedido.getChocolates().size());

            return null;
        });
    }


}


