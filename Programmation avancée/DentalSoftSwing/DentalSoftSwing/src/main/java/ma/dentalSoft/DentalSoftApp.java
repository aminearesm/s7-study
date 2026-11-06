package ma.dentalSoft;


import ma.dentalSoft.config.ApplicationContext;
import ma.dentalSoft.repository.api.PatientRepo;
import ma.dentalSoft.repository.oracleImpl.PatientRepoImpl;
import ma.dentalSoft.service.api.PatientService;
import ma.dentalSoft.service.impl.PatientServiceImpl;
import ma.dentalSoft.ui.controllers.PatientController;

public class DentalSoftApp
{
    public static void main( String[] args )
    {

        var ctx = ApplicationContext.getInstance();

        ((PatientController)ctx.getBean("controller"))
                .getAllPatients();

    }
}
