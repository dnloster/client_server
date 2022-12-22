const database = require("../dbconnectMySql");

const Favorite = function (favorite) {
    this.idFavorite = favorite.idFavorite || null;
    this.idAccount = favorite.idAccount || 8;
    this.idTour = favorite.idTour;
};
const databaseLocal = "travelapp";

/**
 * Hàm này trả về một Promise;
 * resolve - rows SELECT được;
 * reject -  err of sql
 */
Favorite.getAll = function () {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "SELECT * FROM " +
                    databaseLocal +
                    ".favorites WHERE statusAction <> 'deleted';"
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Favorite.create = function (newFavorite) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "INSERT INTO " +
                    databaseLocal +
                    ".favorites (`idAccount`, `idTour` ) VALUES ('" +
                    newFavorite.idAccount +
                    "', '" +
                    newFavorite.idTour +
                    "') "
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

Favorite.getById = function (idFavorite) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "SELECT * FROM " +
                    databaseLocal +
                    ".favorites  WHERE idFavorite= ? AND statusAction <> 'deleted';",
                [idFavorite]
            )
            .then((rows) => resolve(rows[0]))
            .catch((err) => reject(err));
    });
};

Favorite.getByEmail = function (email) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "SELECT favorites.idTour, accounts.email, accounts.idAccount, tours.titleTour, tours.price, tours.sale, tours.departureAddress, " +
                    "tours.departureDay, tours.describe, tours.address, tours.vocationTime, tours.type " +
                    "FROM " +
                    databaseLocal +
                    ".favorites " +
                    "inner join accounts on accounts.idAccount = favorites.idAccount " +
                    "inner join tours on tours.idTour = favorites.idTour where email= ?;",
                [email]
            )
            .then((rows) => resolve(rows[0]))
            .catch((err) => reject(err));
    });
};
Favorite.updateById = function (updateFavorite) {
    updateFavorite = { ...updateFavorite, statusAction: "edited" };
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".favorites SET  ?  WHERE (idFavorite= ?);",
                [updateFavorite, updateFavorite.idFavorite]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

/**
 * remove status mà thôi!!!
 */
Favorite.remove = function (idFavorite) {
    return new Promise(function (resolve, reject) {
        database
            .query(
                "UPDATE " +
                    databaseLocal +
                    ".favorites SET `statusAction` = 'deleted' WHERE (idFavorite= ?);",
                [idFavorite]
            )
            .then((rows) => resolve(rows))
            .catch((err) => reject(err));
    });
};

module.exports = Favorite;
