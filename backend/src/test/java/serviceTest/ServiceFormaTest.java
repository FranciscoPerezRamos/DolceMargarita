package serviceTest;

import backend.entities.chocolates.Forma.Bombones;
import backend.entities.chocolates.Forma.Figuras;
import backend.entities.chocolates.Forma.Forma;
import backend.runner.SessionFactoryProvider;
import backend.service.ServiceForma;
import backend.service.TestService;
import org.junit.After;
import org.junit.Test;
import static junit.framework.TestCase.assertEquals;

public class ServiceFormaTest {

    private TestService testService = new TestService();
    private ServiceForma serviceForma = new ServiceForma();
    private Forma bombones = new Bombones();
    private Forma figuras = new Figuras();

    @After
    public void cleanUp(){
        SessionFactoryProvider.destroy();
    }

    @Test
    public void recuperoTodasLasFormas(){
        this.testService.crearEntidad(bombones);
        this.testService.crearEntidad(figuras);

        assertEquals(2, this.serviceForma.recuperarTodos().size());
    }
}
