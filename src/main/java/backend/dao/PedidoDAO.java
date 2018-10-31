package backend.dao;

import backend.entities.pedido.Pedido;
import backend.runner.Runner;
import org.hibernate.Session;
import org.hibernate.query.Query;

import java.util.List;

public class PedidoDAO extends HibernateDAO<Pedido> {

    public PedidoDAO() { super(Pedido.class);}

    public List<Pedido> getPedidosDeCliente(Integer dni) {
        Session session = Runner.getCurrentSession();

        String hql = "from Pedido where dniClientePedido =" + dni.toString();
        Query<Pedido> query = session.createQuery(hql,  Pedido.class);

        return query.getResultList();
    }
}
