const database = require("../dbconnectMySql");

//Task object constructor
const Evaluate = function (evaluate) {
    this.idEvaluate = evaluate.idEvaluate | 0;
    this.numberStarHotel = evaluate.numberStarHotel;
    this.numberStarFood = evaluate.numberStarFood;
    this.numberStarVehicle = evaluate.numberStarVehicle;
    this.numberStarTourGuide = evaluate.numberStarTourGuide;
    this.numberStarSchedule = evaluate.numberStarSchedule;
    this.title = evaluate.title;
    this.contentEvaluate = evaluate.contentEvaluate;
    this.idAccount = evaluate.idAccount;
    this.idTour = evaluate.idTour;
    this.rateAverage = evaluate.rateAverage;
    this.rateTitle = evaluate.rateTitle;
    this.typeEvaluate = evaluate.typeEvaluate;
};

const databaseLocal = "travelapp";

Evaluate.getListEvaluates = function () {
    return new Promise((resolve, reject) => {
        database
            .query(
                "SELECT * FROM " +
                    databaseLocal +
                    ".evaluates WHERE statusAction <> 'deleted'"
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Evaluate.getEvaluateById = function (idEvaluate) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spGetEvaluateById( '${idEvaluate}' ); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Evaluate.getEvaluateByIdTour = function (idTour) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spGetEvaluateByIdTour( '${idTour}' ); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Evaluate.createEvaluate = function (newEvaluate) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "INSERT INTO " +
                    databaseLocal +
                    ".evaluates (`numberStarHotel`, `numberStarFood`, `numberStarVehicle`, `numberStarTourGuide`, `numberStarSchedule`, `title`, `contentEvaluate`, `idAccount`, `idTour`, `rateAverage`, `rateTitle`, `typeEvaluate`) VALUES ('" +
                    newEvaluate.numberStarHotel +
                    "', '" +
                    newEvaluate.numberStarFood +
                    "', '" +
                    newEvaluate.numberStarVehicle +
                    "', '" +
                    newEvaluate.numberStarTourGuide +
                    "', '" +
                    newEvaluate.numberStarSchedule +
                    "', '" +
                    newEvaluate.title +
                    "', '" +
                    newEvaluate.contentEvaluate +
                    "', '" +
                    newEvaluate.idAccount +
                    "', '" +
                    newEvaluate.idTour +
                    "', '" +
                    newEvaluate.rateAverage +
                    "', '" +
                    newEvaluate.rateTitle +
                    "', '" +
                    newEvaluate.typeEvaluate +
                    "') "
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Evaluate.updateById = function (updateEvaluate) {
    updateEvaluate = { ...updateEvaluate, statusAction: "edited" };
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".evaluates SET ? WHERE (idEvaluate = ?);",
                [updateEvaluate, updateEvaluate.idEvaluate]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Evaluate.remove = function (idEvaluate) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".evaluates SET `statusAction` = 'deleted' WHERE idEvaluate = ?",
                [idEvaluate]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

module.exports = Evaluate;
