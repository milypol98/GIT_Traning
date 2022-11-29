//package pl.milypol.qr_shirt.controller;
//
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//import pl.milypol.qr_shirt.config.CurrentUser;
//import pl.milypol.qr_shirt.entity.User;
//import pl.milypol.qr_shirt.service.UserService;
//
//@Controller
//public class UserController {
//    private final UserService userService;
//
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }
//    @GetMapping("/admin")
//    @ResponseBody
//    public String admin(@AuthenticationPrincipal CurrentUser customUser) {
//        User entityUser = customUser.getUser();
//        return "Hello " + entityUser.getUsername();
//    }
////    @GetMapping("/create-user")
////    @ResponseBody
////    public String createUser() {
////        User user = new User();
////        user.setUsername("admin");
////        user.setPassword("admin");
////        userService.saveUser(user);
////        return "admin";
////    }
//
//}
