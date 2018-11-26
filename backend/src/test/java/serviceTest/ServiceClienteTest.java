package serviceTest;

import backend.entities.Cliente;
import backend.entities.chocolates.Chocolate;
import backend.entities.chocolates.Forma.Huevos;
import backend.entities.chocolates.Tamanio.Grande;
import backend.entities.chocolates.TipoChocolate.ChocolateBlanco;
import backend.runner.SessionFactoryProvider;
import backend.service.ServiceClientes;
import backend.service.TestService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static junit.framework.TestCase.assertEquals;
import java.util.List;

public class ServiceClienteTest {

    private TestService testService = new TestService();
    private ServiceClientes serviceClientes = new ServiceClientes();
    private Cliente cliente1;
    private Cliente cliente2;

    @Before
    public void setUp(){

        this.cliente1 = new Cliente(40399728, "Marge Simpson", 1234565, "Av Siempre Viva", "m@gmail.com");
        this.cliente2 = new Cliente(50983845, "Bart Simpson", 1234565, "Av Siempre Viva", "b@gmail.com");
    }

    @After
    public void cleanUp(){
        SessionFactoryProvider.destroy();
    }

    @Test
    public void seObtienenTodosLosClientes(){
        this.testService.crearEntidad(cliente1);
        this.testService.crearEntidad(cliente2);

        List<Cliente> clientes = this.serviceClientes.getClientes();
        assertEquals(2, clientes.size());

        assertEquals("Marge Simpson", clientes.get(0).getNombreYApellido());
        assertEquals("Bart Simpson", clientes.get(1).getNombreYApellido());
    }
}
