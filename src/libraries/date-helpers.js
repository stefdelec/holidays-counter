export class DateHelper {

    static listOfDateInRange(startDate, endDate) {
        var daysOfYear = [];
        for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            daysOfYear.push(new Date(d));
        }
        return daysOfYear;
    }

    static isSameDay(d1, d2) {
        return d1.getFullYear() === d2.getFullYear()
            && d1.getMonth() === d2.getMonth()
            && d1.getDate() === d2.getDate();
    }

    static isDateIncludedInRange(dateToVerify,) {

    }

    static dateIfy(date) {
        return date instanceof Date ? date : new Date(date);
    }

    static isDate(date) {
        return date instanceof Date;
    }

}