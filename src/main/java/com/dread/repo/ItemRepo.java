package com.dread.repo;

import com.dread.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Dread on 17/11/2014.
 */
public interface ItemRepo extends JpaRepository<Item,Integer> {
}
