const database = require("../dbconnectMySql");

const Report = function (report) {};
const databaseLocal = "travelapp";

/**
 * Hàm này trả về một Promise;
 * resolve - rows SELECT được;
 * reject -  err of sql
 */
Report.getReport = function () {
    return new Promise(function (resolve, reject) {
        database
            .query("call " + databaseLocal + `.spGetReport(); `)
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Report.getReportNumberOfTourists = function () {
    return new Promise(function (resolve, reject) {
        database
            .query("call " + databaseLocal + `.spReportNumberOfTourists(); `)
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Report.getYearFirstNewTour = function () {
    return new Promise(function (resolve, reject) {
        database
            .query("call " + databaseLocal + `.spGetYearFirstNewTour(); `)
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};
Report.getYearFirstNewOrder = function () {
    return new Promise(function (resolve, reject) {
        database
            .query("call " + databaseLocal + `.spGetYearFirstNewOrder(); `)
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};
Report.getReportNumberPeopleFollowDestinationAll = function (
    yearOldest,
    yearLatest
) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spReportNumberPeopleFollowDestinationAll(${yearOldest}, ${yearLatest}); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Report.getReportRevenueFollowMonthAll = function (dateOldest, dateLatest) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spReportRevenueFollowMonthAll('${dateOldest}', '${dateLatest}' ); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

/**
 * Hàm này trả về các điểm đến theo thời gian
 */
Report.getDestinationByTime = function (month) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spGetReportDestinationByTime('${month}'); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

module.exports = Report;
