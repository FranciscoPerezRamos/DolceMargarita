package daoTest;

import backend.dao.FormaDao;
import backend.entities.chocolates.Forma.Bombones;
import backend.entities.chocolates.Forma.Figuras;
import backend.entities.chocolates.Forma.Forma;
import backend.runner.Runner;
import backend.runner.SessionFactoryProvider;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

public class FormaDAOTest {
    private FormaDao formaDao;
    private Forma bombones;
    private Forma figuras;

    @Before
    public void setUp(){
      formaDao = new FormaDao();
      bombones = new Bombones();
      figuras = new Figuras();
    }

    @Test
    public void recuperoTodasLasFormas(){
        Runner.runInSession(() -> {
         this.formaDao.guardar(bombones);
         this.formaDao.guardar(figuras);

         List<Forma> formasRecuperadas = this.formaDao.recuperarTodos();
         assertEquals(2, formasRecuperadas.size());
         return null;
        });
    }

}
