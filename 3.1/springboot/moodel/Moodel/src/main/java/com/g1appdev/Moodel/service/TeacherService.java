package com.g1appdev.Moodel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.g1appdev.Moodel.entity.Teacher;
import com.g1appdev.Moodel.respository.TeacherRepo;

@Service
public class TeacherService {
    
    @Autowired
    TeacherRepo trepo;

    public TeacherService() {
        super();
    }

    public Teacher postTeacherRecord(Teacher teacher) {
        return trepo.save(teacher);
    }

    public List<Teacher> getAllTeachers() {
        return trepo.findAll();
    }
}
