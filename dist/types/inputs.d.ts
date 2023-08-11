export interface IInputBase {
    id: string;
    name: string;
    isDisabled: boolean;
}
export interface IInput extends IInputBase {
    type: 'text' | 'number';
}
export interface IDatepicker extends IInputBase {
    disabledDates: {
        dates: Date[];
    };
    startingView: 'time' | 'day' | 'month' | 'year';
}
//# sourceMappingURL=inputs.d.ts.map