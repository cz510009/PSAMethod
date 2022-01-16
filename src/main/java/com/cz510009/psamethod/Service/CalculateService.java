package com.cz510009.psamethod.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

import com.cz510009.psamethod.Model.SensitivityDto;

import org.springframework.stereotype.Service;

@Service
public class CalculateService {
    public SensitivityDto calculate(double base) {
        double mid = base;
        double high = round(mid * 1.5);
        double low = round(mid / 2);
        SensitivityDto dto = new SensitivityDto(high, mid, low);
        // mid = (Math.floor(mid * 100)) / 100;
        // high = (Math.floor(high * 100)) / 100;
        // low = (Math.floor(low * 100)) / 100;
        return dto;
    }

    public SensitivityDto calculate(double sen, double mid, int count) {
        double high = 0;
        double low = 0;
        switch (count) {
            case 0:
            case 1:
                mid = (sen + mid) / 2;
                System.out.println(mid);
                high = mid * 1.5;
                System.out.println(high);
                low = mid * 0.5;
                System.out.println(low);
                break;
            case 2:
                mid = (sen + mid) / 2;
                high = mid * 1.4;
                low = mid * 0.6;
                break;
            case 3:
                mid = (sen + mid) / 2;
                high = mid * 1.3;
                low = mid * 0.7;
                break;
            case 4:
                mid = (sen + mid) / 2;
                high = mid * 1.2;
                low = mid * 0.8;
                break;
            case 5:
                mid = (sen + mid) / 2;
                high = mid * 1.1;
                low = mid * 0.9;
                break;
            case 6:
                mid = (sen + mid) / 2;
                high = 0;
                low = 0;
                break;
            default:
                break;
        }
        mid = round(mid);
        high = round(high);
        low = round(low);
        // mid = (Math.floor(mid * 100)) / 100;
        // high = (Math.floor(high * 100)) / 100;
        // low = (Math.floor(low * 100)) / 100;
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
