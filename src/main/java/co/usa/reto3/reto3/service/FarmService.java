package co.usa.reto3.reto3.service;

import co.usa.reto3.reto3.model.Farm;
import co.usa.reto3.reto3.repository.FarmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FarmService {

    @Autowired
    private FarmRepository farmRepository;

    public List<Farm> getAll() {
        return farmRepository.getAll();
    }

    public Optional<Farm> getFarm(int idFinca) {
        return farmRepository.getFarm(idFinca);
    }

    public Farm save(Farm f) {
        if(f.getId()==null) {
            return farmRepository.save(f);
        }else{
            Optional<Farm> paux=farmRepository.getFarm(f.getId());
            if(paux.isEmpty()){
                return farmRepository.save(f);
            }else{
                return f;
            }
        }
    }
}
