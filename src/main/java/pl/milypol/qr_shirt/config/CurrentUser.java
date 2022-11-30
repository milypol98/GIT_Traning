//package pl.milypol.qr_shirt.config;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import pl.milypol.qr_shirt.entity.User;
//
//import java.util.Collection;
//
//public class CurrentUser extends User {
//    private final pl.milypol.qr_shirt.entity.User user;
//    public CurrentUser(String username, String password,
//                       Collection<? extends GrantedAuthority> authorities,
//                       pl.milypol.qr_shirt.entity.User user) {
//        super(username, password, authorities);
//        this.user = user;
//    }
//    public pl.milypol.qr_shirt.entity.User getUser() {return user;}
//}
