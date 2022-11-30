package pl.milypol.qr_shirt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.milypol.qr_shirt.entity.Icd9;

import java.util.List;

public interface Icd9Repository extends JpaRepository<Icd9,Long> {
    @Query(value = "SELECT * FROM icd9 WHERE zakres = ?",nativeQuery = true)
    List<Icd9> listIcd9ByScope(String scope);
    @Query(value = "select * from icd9 where zakres between ? and ? and poziom is null",nativeQuery = true)
    List<Icd9> listIcd9ByLevelBetween(String level, String level1);
    @Query(value = "select * from icd9 where kod LIKE ?", nativeQuery= true)
    List<Icd9> listIcd9ByCode(String code);
    @Query(value = "select * from icd9 where kod LIKE %?%  AND poziom IS NOT NULL", nativeQuery = true)
    List<Icd9> findaLLIcd9ByKod(String code);
    @Query(value = "select * from icd9 where opis LIKE %?% AND poziom IS NOT NULL", nativeQuery = true)
    List<Icd9> findAllIcd9ByOpis(String description);

}
