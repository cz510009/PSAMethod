package com.cz510009.psamethod.Model;

import lombok.Getter;

public class SensitivityDto {
    @Getter
    private final double high;

    @Getter
    private final double mid;

    @Getter
    private final double low;

    public SensitivityDto(double high, double mid, double low) {
        this.high = high;
        this.mid = mid;
        this.low = low;
    }
}
