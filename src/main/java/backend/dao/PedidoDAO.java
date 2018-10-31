package backend.dao;

import backend.entities.pedido.Pedido;

public class PedidoDAO extends HibernateDAO<Pedido> {

    public PedidoDAO() { super(Pedido.class);}

}
