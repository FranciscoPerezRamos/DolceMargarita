package backend.dao;

import backend.entities.Cliente;
import backend.entities.chocolates.Chocolate;
import backend.runner.Runner;
import org.hibernate.Session;
import org.hibernate.query.Query;

import java.util.List;

public class ClienteDAO extends HibernateDAO<Cliente> {
    public ClienteDAO() {
        super(Cliente.class);
    }


    public List<Cliente> getClientes() {
        Session session = Runner.getCurrentSession();

        String hql = "from Cliente";

        Query<Cliente> query = session.createQuery(hql, Cliente.class);
        query.list();

        return query.getResultList();
    }
}
