package sz.shinytokencustom.virtualNode.Entity;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import sz.shinytokencustom.virtualNode.IVirtualNodeRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private IVirtualNodeRepository virtualNodeRepository;

    @Override
    public void run(String... args) throws Exception {
        if (virtualNodeRepository.count() == 0) {  // Check if the table is empty
            // Insert the default values
            virtualNodeRepository.save(new X500Entity(
                    "CN=Alice, OU=Test Dept, O=R3, L=London, C=GB",
                    "2390acb8-d8ae-408a-9b8e-fa694ed4ddd3",
                    "B9036B3DEB5C",
                    "B9036B3DEB5CAB2FB94E40CDDC65DB34186630E80813C621FC36E45C845DCE17"
            ));

            virtualNodeRepository.save(new X500Entity(
                    "CN=Bob, OU=Test Dept, O=R3, L=London, C=GB",
                    "2390acb8-d8ae-408a-9b8e-fa694ed4ddd3",
                    "97AD7F613BF7",
                    "97AD7F613BF791B503644DCEEDAFC46B6FFB10E7E39DF747002BFFBE0B13F507"
            ));

            virtualNodeRepository.save(new X500Entity(
                    "CN=British Government, OU=Test Dept, O=British Government, L=London, C=GB",
                    "2390acb8-d8ae-408a-9b8e-fa694ed4ddd3",
                    "E836D7051478",
                    "E836D7051478AC0CB0E0CAD62B9E3E4013F796BD39B81468B5C93BC545BFA39D"
            ));

            virtualNodeRepository.save(new X500Entity(
                    "CN=Samir, OU=Test Dept, O=Samir, L=London, C=GB",
                    "2390acb8-d8ae-408a-9b8e-fa694ed4ddd3",
                    "230BFD731872",
                    "230BFD7318722C1CF725DAB6AF4EA02B3FD007BD26049744E800FCAB6915B297"
            ));

            virtualNodeRepository.save(new X500Entity(
                    "CN=Charlie, OU=Test Dept, O=R3, L=London, C=GB",
                    "2390acb8-d8ae-408a-9b8e-fa694ed4ddd3",
                    "5DCBB317FD84",
                    "5DCBB317FD8449039D80C365D2294A72A23453E91222F1A0939521DE9D852778"
            ));

            virtualNodeRepository.save(new X500Entity(
                    "CN=NotaryRep1, OU=Test Dept, O=R3, L=London, C=GB",
                    "2390acb8-d8ae-408a-9b8e-fa694ed4ddd3",
                    "FEB451FED537",
                    "FEB451FED53717C8733EEB7598E3B6FD79551E6992120B794D640D8860342084"
            ));

            System.out.println("Initial data inserted.");
        } else {
            System.out.println("Data already exists, skipping initialization.");
        }
    }
}

