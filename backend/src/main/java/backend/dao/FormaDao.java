package backend.dao;

import backend.entities.chocolates.Forma.Forma;
import backend.runner.Runner;
import org.hibernate.Session;
import org.hibernate.query.Query;

import java.util.List;

public class FormaDao extends HibernateDAO<Forma> {
    public FormaDao() {
        super(Forma.class);
    }

    public List<Forma> recuperarTodos() {
        Session session = Runner.getCurrentSession();

        String hql = "from Forma";

        Query<Forma> query = session.createQuery(hql, Forma.class);
        query.list();

        return query.getResultList();
    }

}
