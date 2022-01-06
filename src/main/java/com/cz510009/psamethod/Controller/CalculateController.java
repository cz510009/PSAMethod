package com.cz510009.psamethod.Controller;

import java.util.List;

import com.cz510009.psamethod.Model.SensitivityDto;
import com.cz510009.psamethod.Service.CalculateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("api/calculate")
public class CalculateController {
    private final CalculateService calculateService;

    @Autowired
    public CalculateController(CalculateService calculateService) {
        this.calculateService = calculateService;
    }

    @GetMapping
    public SensitivityDto calculateSensitivity(@RequestParam double dpi) {
        return calculateService.calculate(dpi);
    }

}
