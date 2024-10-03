package com.g1appdev.Moodel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.g1appdev.Moodel.entity.Teacher;
import com.g1appdev.Moodel.service.TeacherService;

@RestController
@RequestMapping(method = RequestMethod.GET,path="/api/teacher")
public class TeacherController {
    
    @Autowired
    TeacherService tserv;

    @GetMapping("/print")
    public String print() {
        return "Hello, Test";
    }

    // CREATE
    @PostMapping("/postteacherrecord")
    public Teacher postTeacherRecord(@RequestBody Teacher teacher) {
        return tserv.postTeacherRecord(teacher);
    }

    // READ
    @GetMapping("/getAllTeachers")
    public List<Teacher> getAllTeachers() {
        return tserv.getAllTeachers();
    }

    // UPDATE

    // DELETE
}
