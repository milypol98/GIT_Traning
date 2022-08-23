package pl.milypol.qr_shirt.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
    @RequestMapping("/")
    @ResponseBody
    public String home() {
        return "hello world !!!";
    }
    @RequestMapping(value = {"/about"}, method = RequestMethod.GET)
    public String about() { return "about"; }

    @GetMapping("/test")
    @ResponseBody
    @Secured("ROLE_ADMIN")
    public String test() { return "test"; }
}
