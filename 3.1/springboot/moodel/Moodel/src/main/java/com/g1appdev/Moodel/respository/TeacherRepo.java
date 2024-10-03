package com.g1appdev.Moodel.respository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.g1appdev.Moodel.entity.Teacher;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher, UUID> {

    public Teacher findByLname(String lname);
    
}
