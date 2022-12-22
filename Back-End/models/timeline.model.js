const database = require("../dbconnectMySql.js");

//Task object constructor
const Timeline = function (timeline) {
    this.idTimelines = timeline.idTimelines | 0;
    this.idTour = timeline.idTour;
    this.title = timeline.title;
    this.description = timeline.description;
    this.date = timeline.date.slice(0, 10).replace(/-/g, "/");
};

const databaseLocal = "travelapp";

Timeline.getAllTimeline = function () {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "SELECT * FROM " +
                    databaseLocal +
                    ".timelines WHERE statusAction <> 'deleted'; "
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Timeline.getTimelineById = function (idTimelines) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "SELECT * FROM " +
                    databaseLocal +
                    ".timelines where idTimelines = ? AND statusAction <> 'deleted'; ",
                [idTimelines]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Timeline.getTimelineByIdTour = function (idTour) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spGetTimelineByIdTour( '${idTour}' ); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Timeline.getAllTimelineSearch = function (searchs) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spSearchEngineTimeline( '${searchs.keySearch}', '${searchs.date}' ); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Timeline.createTimeline = function (newTimeline) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "INSERT INTO " +
                    databaseLocal +
                    ".timelines (`idTour`, `title`, `description`, `date`) VALUES ('" +
                    newTimeline.idTour +
                    "', '" +
                    newTimeline.title +
                    "', '" +
                    newTimeline.description +
                    "', '" +
                    newTimeline.date +
                    "') "
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Timeline.updateById = function (updateTimeline) {
    updateTimeline = { ...updateTimeline, statusAction: "edited" };
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".timelines SET ? WHERE (idTimelines = ?);",
                [updateTimeline, updateTimeline.idTimelines]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Timeline.remove = function (idTimelines) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".timelines SET `statusAction` = 'deleted' WHERE idTimelines = ?",
                [idTimelines]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

module.exports = Timeline;
