package ma.dentalSoft.ui.controllers;

import lombok.AllArgsConstructor;
import lombok.Data;
import ma.dentalSoft.service.api.PatientService;

@Data  @AllArgsConstructor
public class PatientController {

    private final PatientService service;


    public void getAllPatients(){

        System.out.println("Call for Patient Controller to show result in console");
       var result = service.getPatientsSortedByName();
       result.forEach(p ->
               System.out.println("- Patient :  "+ p.getNom() + " agé de " + p.getAge() + "ans"));
    }
}
