package pl.milypol.qr_shirt.entity;

import lombok.Getter;
import lombok.Setter;
import pl.milypol.qr_shirt.Enum.Size;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class TShirt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Size size;
    private Long price;
    @ManyToOne
    private User user;
    private String description;
    //private QRCode qrcode

}
