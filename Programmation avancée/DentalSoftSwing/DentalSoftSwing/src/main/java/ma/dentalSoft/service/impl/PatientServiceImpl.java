package ma.dentalSoft.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.dentalSoft.domain.Patient;
import ma.dentalSoft.repository.api.PatientRepo;
import ma.dentalSoft.service.api.PatientService;

@Data @AllArgsConstructor
public class PatientServiceImpl implements PatientService {

    // Couplage faible
    private final PatientRepo repo;

    @Override
    public List<Patient> getPatientsSortedByName() {

        System.out.println("Call for PatientService to sort patients by name ");
        var liste = repo.findAll()
                .stream()
                .sorted((p1,p2)-> p1.getNom().compareTo(p2.getNom()))
                .toList();
        var result = new ArrayList<Patient>();
        result.addAll(liste);
        return  result;
    }
}
