package pl.milypol.qr_shirt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pl.milypol.qr_shirt.entity.Icd9;
import pl.milypol.qr_shirt.repository.Icd9Repository;

import java.util.*;

@Controller
public class HomeController {
    private final Icd9Repository icd9Repository;

    public HomeController(Icd9Repository icd9Repository) {
        this.icd9Repository = icd9Repository;
    }

    @RequestMapping("/")
    public String home() {
        return "test";
    }

    @RequestMapping(value = {"/about"}, method = RequestMethod.GET)
    public String about() {
        return "search";
    }
    @GetMapping("/searchicd9")
    public String SearchIcd9(@RequestParam String search,Model model){
        Set<Icd9> searchicd9 = new HashSet<>();
        searchicd9.addAll(icd9Repository.findaLLIcd9ByKod(search));
        searchicd9.addAll(icd9Repository.findAllIcd9ByOpis(search));
        model.addAttribute("seaarchIcd9" , searchicd9);
        return "listIcd9";
    }

    //    @GetMapping("/test")
//    @ResponseBody
//    @Secured("ROLE_ADMIN")
//    public String test() { return "test"; }
    @GetMapping("/icd9Table")
    public String listIcd9(Model model) {
        model.addAttribute("listIcd9Scope",icd9Repository.listIcd9ByScope("0"));
        return "icd9List";
    }
    @GetMapping("/icd9More")
    public String moreListIcd9(@RequestParam String code,Model model){
        String[] splitCode = code.split("-");
        model.addAttribute("listByScope",icd9Repository.listIcd9ByLevelBetween(splitCode[0],splitCode[1]));
        System.out.println(icd9Repository.listIcd9ByLevelBetween(splitCode[0],splitCode[1]));
        return "listIcd9Scope";
    }
    @GetMapping("/icd9Detalis")
    public String listIcd9Detalis(@RequestParam String code, Model model){
        if (icd9Repository.listIcd9ByCode(code + "_").size() != 0){
            model.addAttribute("listByDetalis",icd9Repository.listIcd9ByCode(code + "_"));
        }else {
            model.addAttribute("listByDetalis",icd9Repository.listIcd9ByCode(code + "__"));
        }
        return "icd9ListByDetalis";
    }
}



