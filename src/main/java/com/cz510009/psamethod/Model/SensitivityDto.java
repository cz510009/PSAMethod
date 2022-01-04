package com.cz510009.psamethod.Model;

import lombok.Getter;

public class SensitivityDto {
    @Getter
    private final double high;

    @Getter
    private final double low;

    public SensitivityDto(double high, double low) {
        this.high = high;
        this.low = low;
    }
}
