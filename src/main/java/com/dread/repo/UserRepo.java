package com.dread.repo;

import com.dread.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Dread on 17/11/2014.
 */
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {

}
