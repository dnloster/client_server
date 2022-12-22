const database = require("../dbconnectMySql");

//Task object constructor
const NoticeTo = function (noticeTo) {
    this.idNoticeTo = noticeTo.idNoticeTo | 0;
    this.idNotification = noticeTo.idNotification;
    this.idAccount = noticeTo.idAccount;
    this.statusAction = noticeTo.statusAction;
};

const databaseLocal = "travelapp";

NoticeTo.listNoticeTos = function (idAccount) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "call " +
                    databaseLocal +
                    `.spGetNoticeToWithIdAccount(${idAccount}); `
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

NoticeTo.createNoticeTo = function (newNoticeTo) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "INSERT INTO " +
                    databaseLocal +
                    ".noticeto (`idNotification`, `idAccount`) VALUES ('" +
                    newNoticeTo.idNotification +
                    "', '" +
                    newNoticeTo.idAccount +
                    "') "
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

NoticeTo.updateById = function (updateNoticeTo) {
    updateNoticeTo = { ...updateNoticeTo, statusAction: "edited" };
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".noticeto SET ? WHERE (idNoticeTo = ?);",
                [updateNoticeTo, updateNoticeTo.idNoticeTo]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

NoticeTo.remove = function (idNoticeTo) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".noticeto SET `statusAction` = 'deleted' WHERE idNoticeTo = ?",
                [idNoticeTo]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

module.exports = NoticeTo;
