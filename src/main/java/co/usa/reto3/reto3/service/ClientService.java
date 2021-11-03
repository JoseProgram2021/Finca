package co.usa.reto3.reto3.service;

import co.usa.reto3.reto3.model.Client;
import co.usa.reto3.reto3.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll() {
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int clientId) {
        return clientRepository.getClient(clientId);
    }

    public Client save(Client c) {
        if(c.getIdClient()==null) {
            return clientRepository.save(c);
        }else{
            Optional<Client> paux= clientRepository.getClient(c.getIdClient());
            if(paux.isEmpty()){
                return clientRepository.save(c);
            }else{
                return c;
            }
        }
    }

}