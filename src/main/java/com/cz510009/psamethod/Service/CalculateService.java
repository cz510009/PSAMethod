package com.cz510009.psamethod.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

import com.cz510009.psamethod.Model.SensitivityDto;

import org.springframework.stereotype.Service;

@Service
public class CalculateService {
    private double STANDARD_EDPI = 280.0;

    public SensitivityDto calculate(double dpi) {
        double mid = round(STANDARD_EDPI / dpi);
        double high = round(mid * 1.5);
        double low = round(mid / 2);
        SensitivityDto dto = new SensitivityDto(high, mid, low);

        return dto;
    }

    private static double round(double num) {
        BigDecimal before = new BigDecimal(num);
        BigDecimal after = before.setScale(2, RoundingMode.HALF_UP);
        double rounded = after.doubleValue();
        return rounded;
    }

}
