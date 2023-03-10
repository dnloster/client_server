const database = require("../dbconnectMySql");

//Task object constructor
const Notification = function (notification) {
    this.idNotification = notification.idNotification | 0;
    this.title = notification.title;
    this.contentNotification = notification.contentNotification;
    this.status = notification.status;
    this.type = notification.type;
    this.dateTime = notification.dateTime
        ? notification.dateTime.slice(0, 10).replace(/-/g, "/")
        : undefined;
    // this.dateCreated = notification.dateCreated.slice(0, 10).replace(/-/g, "/");
    this.idAccount = notification.idAccount;
};

const databaseLocal = "travelapp";

Notification.getPaginationNotification = function (limit, offset) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spPaginationNotification( '${limit}' , '${offset}' ); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Notification.getLatestId = function () {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "SELECT idNotification FROM " +
                    databaseLocal +
                    ".notifications order by idNotification desc limit 1;"
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Notification.getAllNotification = function () {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "SELECT * FROM " +
                    databaseLocal +
                    ".notifications WHERE statusAction <> 'deleted';"
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Notification.getAllNotificationSearch = function (searchs) {
    if (searchs.conditional === "title") {
        return new Promise(function (resolve, reject) {
            database
                .query(
                    "call " +
                        databaseLocal +
                        `.spsearchEngineNotificationByTitle( '${searchs.keySearch}' ); `
                )
                .then((rows) => resolve(rows))
                .catch((err) => reject(err));
        });
    } else if (searchs.conditional === "content") {
        return new Promise(function (resolve, reject) {
            database
                .query(
                    "call " +
                        databaseLocal +
                        `.spsearchEngineNotificationByContent( '${searchs.keySearch}'); `
                )
                .then((rows) => resolve(rows))
                .catch((err) => reject(err));
        });
    } else {
        return new Promise(function (resolve, reject) {
            database
                .query(
                    "call " +
                        databaseLocal +
                        `.spsearchEngineNotification( '${searchs.keySearch}', '${searchs.dayTime}' ); `
                )
                .then((rows) => resolve(rows))
                .catch((err) => reject(err));
        });
    }
};

Notification.createNotification = function (newNotification) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "INSERT INTO " +
                    databaseLocal +
                    ".notifications (`title`, `contentNotification`, `status`, `type`, `dateTime`, `idAccount`) VALUES ('" +
                    newNotification.title +
                    "', '" +
                    newNotification.contentNotification +
                    "', '" +
                    newNotification.status +
                    "', '" +
                    newNotification.type +
                    "', '" +
                    newNotification.dateTime +
                    "', '" +
                    newNotification.idAccount +
                    "') "
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Notification.getNotificationById = function (idNotification) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "SELECT * FROM " +
                    databaseLocal +
                    ".notifications  WHERE idNotification = ? AND statusAction <> 'deleted';",
                [idNotification]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Notification.updateById = function (updateNotification) {
    updateNotification = { ...updateNotification, statusAction: "edited" };
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".notifications SET ? WHERE (idNotification = ?);",
                [updateNotification, updateNotification.idNotification]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Notification.remove = function (idNotification) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".notifications SET `statusAction` = 'deleted' WHERE idNotification = ?",
                [idNotification]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

module.exports = Notification;
