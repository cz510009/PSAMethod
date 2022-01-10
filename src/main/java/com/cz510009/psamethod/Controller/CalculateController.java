package com.cz510009.psamethod.Controller;

import com.cz510009.psamethod.Model.SensitivityDto;
import com.cz510009.psamethod.Service.CalculateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
// @RequestMapping("api/calculate")
public class CalculateController {
    private final CalculateService calculateService;

    @Autowired
    public CalculateController(CalculateService calculateService) {
        this.calculateService = calculateService;
    }

    @RequestMapping("api/calculate")
    public SensitivityDto calculateSensitivity(@RequestParam double dpi) {
        return calculateService.calculate(dpi);
    }

    @RequestMapping("api/calculate/next")
    @GetMapping
    public SensitivityDto calculateNextSensitivity(@RequestParam double sen, @RequestParam double mid,
            @RequestParam String type) {
        return calculateService.calculate(sen, mid, type);
    }

}
