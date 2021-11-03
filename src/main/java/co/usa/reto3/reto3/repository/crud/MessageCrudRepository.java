package co.usa.reto3.reto3.repository.crud;

import co.usa.reto3.reto3.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
}