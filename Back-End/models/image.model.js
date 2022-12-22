const mysql = require("../dbconnection.js");
const fs = require("fs");

const Image = function (image) {
    this.idImage = image.idImage | 0;
    this.link = image.link;
    this.dateAdded = image.dateAdded.slice(0, 10).replace(/-/g, "/"); //format date YYYY-MM-DD
    this.status = image.status;
    this.name = image.name;
    this.idTour = image.idTour;
};

const databaseLocal = "travelapp";

Image.getImageById = function (idImage, fncResult) {
    mysql.query(
        "SELECT * FROM " +
            databaseLocal +
            ".images WHERE idImage = " +
            idImage +
            " AND statusAction <> 'deleted';",
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};

Image.getAllImageTour = function (fncResult) {
    mysql.query(
        "SELECT * FROM " +
            databaseLocal +
            ".images WHERE statusAction <> 'deleted' AND idTour > 0;",
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};

Image.getAllImagePost = function (fncResult) {
    mysql.query(
        "SELECT * FROM " +
            databaseLocal +
            ".images WHERE statusAction <> 'deleted' AND idPost > 0;",
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};
Image.getAllImageConfig = function (fncResult) {
    mysql.query(
        "SELECT * FROM " +
            databaseLocal +
            ".images WHERE statusAction <> 'deleted' AND idConfig > 0;",
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};

Image.getAllImageTourById = function (idTour, fncResult) {
    mysql.query(
        "SELECT * FROM " +
            databaseLocal +
            ".images WHERE idTour = " +
            idTour +
            " AND statusAction <> 'deleted';",
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};

Image.remove = function (idImage, name, fncResult) {
    mysql.query(
        "UPDATE " +
            databaseLocal +
            ".images SET `statusAction` = 'deleted' WHERE idImage = ?",
        [idImage],
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                let path = `./public/img/${name}`;
                path = path.replace(" ", "");
                fs.unlink(path, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                fncResult(null, res);
            }
        }
    );
};

Image.createImageTour = function (idTour, name, fncResult) {
    let url = `/img/${name}`;
    let status = "done";
    mysql.query(
        `INSERT INTO ${databaseLocal}.images (url, status, name, idTour) VALUES ('${url}', '${status}', ' ${name}' , '${idTour}')`,
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};

Image.createImagePost = function (idPost, name, fncResult) {
    let url = `/img/${name}`;
    let status = "done";
    mysql.query(
        `INSERT INTO ${databaseLocal}.images (url, status, name, idPost) VALUES ('${url}', '${status}', ' ${name}' , '${idPost}')`,
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};

Image.createImageConfig = function (idConfig, name, fncResult) {
    let url = `/img/${name}`;
    mysql.query(
        "UPDATE " + databaseLocal + ".configs SET ? WHERE (idConfig = ?);",
        [{ image: url }, idConfig],
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};

Image.updateAvatar = function (idAccount, name, fncResult) {
    let url = `/img/${name}`;
    mysql.query(
        "UPDATE " + databaseLocal + ".accounts SET ? WHERE (idAccount = ?);",
        [{ avatar: url }, idAccount],
        function (err, res) {
            if (err) {
                fncResult(err, null);
            } else {
                fncResult(null, res);
            }
        }
    );
};
module.exports = Image;
