import {DateHelper} from "../libraries/date-helpers";
const host = "https://date-holidays.herokuapp.com";


class HolidaysHelper {

    constructor(country) {
        this.country = country;
    }

    /**
     *
     * @param years <number[]>
     * @returns {Promise.<holiday[]>}
     */
    async fetchHolidays(years) {
        const urls = years.map(year => `${host}/countries/${this.country}/holidays/${year}`)

        await Promise
            .all(urls
                .map(url => fetch(url)
                    .then(i => i.json())
                )
            )
            .then(i => [].concat(...i))
            .then(holidays => this.holidays = holidays);

        return this;
    }


    isHoliday(dateToVerify) {
        return this.holidays.findIndex(holiday => {
                const {date} = holiday;
                return DateHelper.isSameDay(new Date(dateToVerify), new Date(date))
            }) > -1
    }

    /**
     *
     * @param country
     * @param startDate <string>
     * @param endDate <string>
     * @returns {Promise.<void>}
     */
    async countHolidayInDateRange(startDate, endDate) {
        const startyear = new Date(startDate).getFullYear();
        const endYear = new Date(endDate).getFullYear();

        let years = []
        for (var i = startyear; i <= endYear; i++) {
            years.push(i)
        }
        await this.fetchHolidays(years)
        const rangeOfDate = DateHelper
            .listOfDateInRange(new Date(startDate), new Date(endDate));

        return rangeOfDate
            .filter(date => !this.isHoliday(date))
            .length;
    }

}

export {HolidaysHelper}
