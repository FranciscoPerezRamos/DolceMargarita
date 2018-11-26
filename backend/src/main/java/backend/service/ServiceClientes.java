package backend.service;

import backend.dao.ClienteDAO;
import backend.entities.Cliente;
import backend.runner.Runner;

import java.util.List;

public class ServiceClientes {

    private ClienteDAO clienteDao;

    public ServiceClientes(){
        clienteDao = new ClienteDAO();
    }

    public List<Cliente> getClientes(){
        return Runner.runInSession(() -> {

            return this.clienteDao.getClientes();
        });
    }
}
