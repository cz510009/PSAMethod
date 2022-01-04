package com.cz510009.psamethod.Service;

import java.util.ArrayList;
import java.util.List;

import com.cz510009.psamethod.Model.SensitivityDto;

import org.springframework.stereotype.Service;

@Service
public class CalculateService {

    public SensitivityDto calculate(double sensitivity) {
        double high = sensitivity * 1.5;
        double low = sensitivity / 2;
        SensitivityDto dto = new SensitivityDto(high, low);

        return dto;
    }

}
