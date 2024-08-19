package sz.shinytokencustom.virtualNode.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import javax.naming.InvalidNameException;
import javax.naming.ldap.LdapName;
import javax.naming.ldap.Rdn;

@Entity
@Table(name = "x500_entity")
@Getter
@Setter
public class X500Entity {

    @Id
    private String x500Name;
    private String groupId;
    private String shortHash;
    private String fullHash;

    // Default constructor
    public X500Entity() {
    }

    // Constructor
    public X500Entity(String x500Name, String groupId, String shortHash, String fullHash) {
        this.x500Name = x500Name;
        this.groupId = groupId;
        this.shortHash = shortHash;
        this.fullHash = fullHash;
    }

    public String getCommonName() {
        if (x500Name == null || x500Name.isEmpty()) {
            return null;
        }

        try {
            LdapName ldapName = new LdapName(x500Name);
            for (Rdn rdn : ldapName.getRdns()) {
                if ("CN".equalsIgnoreCase(rdn.getType())) {
                    return (String) rdn.getValue();
                }
            }
        } catch (InvalidNameException e) {
            e.printStackTrace();
        }

        // Return null if CN is not found
        return null;
    }

    @Override
    public String toString() {
        return "X500Entity{" +
                "x500Name='" + x500Name + '\'' +
                ", groupId='" + groupId + '\'' +
                ", shortHash='" + shortHash + '\'' +
                ", fullHash='" + fullHash + '\'' +
                '}';
    }
}
