package pl.milypol.qr_shirt.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pl.milypol.qr_shirt.entity.Icd9;
import pl.milypol.qr_shirt.repository.Icd9Repository;

import java.util.*;
import java.util.List;

@Controller
public class HomeController {
    private final Icd9Repository icd9Repository;

    public HomeController(Icd9Repository icd9Repository) {
        this.icd9Repository = icd9Repository;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home() {
        return "home";
    }

    @RequestMapping(value = {"/about"}, method = RequestMethod.GET)
    public String about() {
        return "JS";
    }
    @RequestMapping(value = "/searchicd9")
    public String SearchIcd9(@RequestParam String search, Model model) {
        Set<Icd9> searchicd9 = new HashSet<>();
        searchicd9.addAll(icd9Repository.findaLLIcd9ByKod(search));
        searchicd9.addAll(icd9Repository.findAllIcd9ByOpis(search));
        model.addAttribute("searchicd9", searchicd9);
        return "results";
    }

    @RequestMapping(value = {"/icd9Table"}, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Icd9> listIcd9() {
        List<Icd9> list = icd9Repository.listIcd9ByScope("0");
        System.out.println(list);
        return list;
    }
    @RequestMapping(value = {"/icd9More"})
    @ResponseBody
    public List<Icd9> moreListIcd9(@RequestParam String code){
        String[] splitCode = code.split("-");
        List<Icd9> list = icd9Repository.listIcd9ByLevelBetween(splitCode[0],splitCode[1]);
        System.out.println(icd9Repository.listIcd9ByLevelBetween(splitCode[0],splitCode[1]));
        return list;
    }
    @RequestMapping(value = "/icd9Detalis")
    @ResponseBody
    public List<Icd9> listIcd9Detalis(@RequestParam String code){
        List<Icd9> list = new ArrayList<>();
        if (icd9Repository.listIcd9ByCode(code + "_").size() != 0){
            list.addAll(icd9Repository.listIcd9ByCode(code+"_"));
        }else {
            list.addAll(icd9Repository.listIcd9ByCode(code+"__"));
        }
        return list;
    }
}



