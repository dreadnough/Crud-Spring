package com.dread.controller;


import com.dread.entity.User;

import com.dread.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


/**
 * Created by Dread on 17/11/2014.
 */
@Controller
public class UserController {

    @Autowired
    public UserService userService;

    @RequestMapping(value = "users" ,method= RequestMethod.GET)
    public @ResponseBody    List<User> findUsers() {
        return userService.findUsers();

    }

    @RequestMapping("usersPage ")
    public String ShowUsersPage() {
        return "usersPage";
    }

    @RequestMapping(" ")
    public String ShowHomePage() {
        return "index";
    }

}
