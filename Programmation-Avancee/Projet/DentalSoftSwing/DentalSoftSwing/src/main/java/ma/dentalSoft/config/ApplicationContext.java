package ma.dentalSoft.config;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import ma.dentalSoft.repository.api.PatientRepo;
import ma.dentalSoft.repository.oracleImpl.PatientRepoImpl;
import ma.dentalSoft.service.api.PatientService;
import ma.dentalSoft.service.impl.PatientServiceImpl;
import ma.dentalSoft.ui.controllers.PatientController;

// Factory - Singleton
public class ApplicationContext {

   private static ApplicationContext INSTANCE = null ;

   Map<String, Object> beans = new HashMap<>();

    private ApplicationContext() {

        try {
            var cl = Thread.currentThread().getContextClassLoader();
            var configFile = cl.getResourceAsStream("application.properties");


            Properties props = new Properties();
            props.load(configFile);

            var patientRepoClassName = props.getProperty("dao.patientDao");
            var patientServiceClassName = props.getProperty("service.patientService");
            var patientControllerClassName = props.getProperty("controller.patientController");

            var cPatientRepo = Class.forName(patientRepoClassName);
            var cPatientService = Class.forName(patientServiceClassName);
            var cPatientCtr = Class.forName(patientControllerClassName);

            PatientRepo repo = (PatientRepo)cPatientRepo
                                        .getDeclaredConstructor()
                                        .newInstance();
            PatientService service = (PatientService)cPatientService
                                        .getDeclaredConstructor(PatientRepo.class)
                                        .newInstance(repo);
            PatientController controller = (PatientController)cPatientCtr
                                        .getDeclaredConstructor(PatientService.class)
                                        .newInstance(service);

            beans.put("repo", repo);
            beans.put("service", service);
            beans.put("controller", controller);

        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static ApplicationContext getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new ApplicationContext();
        }
       return INSTANCE;
    }

    public Object getBean(String beanName) {
        return beans.get(beanName);
    }

    public static void main(String[] args) {
        System.out.println(ApplicationContext.getInstance());
    }
}
