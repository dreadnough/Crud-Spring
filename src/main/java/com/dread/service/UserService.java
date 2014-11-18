package com.dread.service;

import com.dread.entity.User;
import com.dread.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Dread on 17/11/2014.
 */

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public List<User> findUsers(){
       return userRepo.findAll();
    }
}
