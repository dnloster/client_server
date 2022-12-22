const express = require("express");

// const { check } = require("express-validator");

const router = express.Router();
const tour = require("../controllers/tour.controller");
const schedule = require("../controllers/schedule.controller");
const image = require("../controllers/image.controller");
const order = require("../controllers/order.controller");
const account = require("../controllers/account.controller");
const notification = require("../controllers/notification.controller");
const noticeTo = require("../controllers/noticeTo.controller");
const evaluate = require("../controllers/evaluate.controller");
const post = require("../controllers/post.controller");
const auth = require("../controllers/auth.controller");
const favorite = require("../controllers/favorite.controller");
const timeline = require("../controllers/timeline.controller");
const config = require("../controllers/config.controller");
//authencation
const authenticated = require("../middleware/auth.middleware");
//passport
const passport = require("passport");
//report
const report = require("../controllers/report.controller");

// for config
router.get("/config", config.read);
router.get("/configs", config.listAll);
router.post("/config", config.create);
router.put("/config", authenticated, config.update);
router.delete("/config", authenticated, config.delete);

//for tour
/**
 * @swagger
 * tags:
 *  name: Tours
 *  description: The tours managing API
 */

/**
 * @swagger
 * /tours:
 *  get:
 *      summary: Return list of all tours
 *      tags: [Tours]
 *      responses:
 *          200:
 *              description: The list of tours
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/tours'
 */
router.get("/tours", tour.listAll);

/**
 * @swagger
 * /tour/{id}:
 *  get:
 *      summary: Get tour by id
 *      tags: [Tours]
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: int
 *          required: true
 *          description: The tour id
 *      responses:
 *          200:
 *              description: The tour with id
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/tours'
 *          404:
 *              description: This tour was not found
 */
router.get("/tour", tour.read);

/**
 * @swagger
 * /tours/search/{keySearch}:
 *  get:
 *      summary: Get tour by search
 *      tags: [Tours]
 *      parameters:
 *          -in: path
 *          name: keySearch
 *          schema:
 *              type: string
 *          required: true
 *          description: The tour or description of tour contain this keySearch
 *      responses:
 *          200:
 *              description: The tour contain this keySearch
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/tours'
 *          404:
 *              description: This tour was not found
 */
router.post("/tours/search", tour.listTourSearch);

/**
 * @swagger
 * /tour:
 *  post:
 *      summary: create a new tour
 *      tags: [Tours]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/tours'
 *      responses:
 *          200:
 *              description: Tour is successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/tours'
 *          500:
 *              description: Some server error
 *
 */
router.post("/tour", authenticated, tour.create); //sẽ tạo luôn một schedule tương ứng với idTour mới tạo

/**
 * @swagger
 * /tour/{id}:
 *  put:
 *      summary: update a tour with the id
 *      tags: [Tours]
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The tour id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/tours'
 *      responses:
 *          200:
 *              description: Tour is successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/tours'
 *          400:
 *              description: The tour was not found
 *          500:
 *              description: Some error happened
 */
router.patch("/tour", authenticated, tour.update);
router.patch("/tour/tags-and-services", authenticated, tour.putTagsAndServices);

/**
 * @swagger
 * /tour/{id}:
 *  delete:
 *      summary: delete a tour with the id
 *      tags: [Tours]
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The tour id
 *      responses:
 *          200:
 *              description: Tour is successfully deleted
 *          400:
 *              description: The tour was not found
 */
router.delete("/tour", authenticated, tour.delete);

//for schedule
/**
 * @swagger
 * tags:
 *  name: Schedules
 *  description: The schedule managing API
 */

/**
 * @swagger
 * /schedules:
 *  get:
 *      summary: Return list of all schedules
 *      tags: [Schedules]
 *      responses:
 *          200:
 *              description: The list of schedules
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/schedules'
 */
router.get("/schedules", schedule.listAll);

/**
 * @swagger
 * /schedule/{id}:
 *  get:
 *      summary: Get schedule by id
 *      tags: [Schedules]
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: int
 *          required: true
 *          description: The schedule id
 *      responses:
 *          200:
 *              description: The schedule with id
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Schedules'
 *          404:
 *              description: This schedule was not found
 */
router.get("/schedule", schedule.read);

/**
 * @swagger
 * /schedule:
 *  post:
 *      summary: create a new schedule
 *      tags: [Schedules]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Schedules'
 *      responses:
 *          200:
 *              description: Schedule is successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Schedules'
 *          500:
 *              description: Some server error
 *
 */
router.post("/schedule", authenticated, schedule.create);

/**
 * @swagger
 * /schedule/{id}:
 *  put:
 *      summary: update a schedule with the id
 *      tags: [Schedules]
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The schedule id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Schedules'
 *      responses:
 *          200:
 *              description: Schedule is successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Schedules'
 *          400:
 *              description: The schedule was not found
 *          500:
 *              description: Some error happened
 */
router.patch("/schedule", authenticated, schedule.update);

/**
 * @swagger
 * /schedule/{id}:
 *  delete:
 *      summary: delete a schedule with the id
 *      tags: [Schedules]
 *      parameters:
 *          -in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The schedule id
 *      responses:
 *          200:
 *              description: Schedule is successfully deleted
 *          400:
 *              description: The Schedule was not found
 */
router.delete("/schedule", authenticated, schedule.delete);

//for img
router.get("/imagesTour", image.listAllImageTour);
router.get("/imagesPost", image.listAllImagePost);
router.get("/imagesConfig", image.listAllImageConfig);
router.get("/image", image.listAllImageTourById);
router.delete("/image", authenticated, image.delete);
router.post("/image", image.create);
router.post("/avatar", image.avatar);
router.post("/upload", image.upload);

//for account
router.get("/account", authenticated, account.read);
router.get("/accountWithEmail", authenticated, account.readByEmail);

router.get("/accounts", account.listAll);
router.post("/account", authenticated, account.create);
router.patch("/account", authenticated, account.update);
router.delete("/account", authenticated, account.delete);

//for payment
router.post("/getLinkMoMo", order.getLinkMoMo);
router.post("/getLinkPayment", order.getLinkPayment);
router.post("/resultPayment", order.resultPayment);
router.post("/cancelPayment", order.cancelPayment);
router.post("/getLinkPayPal", order.createOrderPayPal);
router.post("/getLinkPayPal/:orderID/capture", order.capturePaymentPayPal);

//for order`
router.get("/order", order.read);
router.get("/orderWithEmail", order.readByEmail);
router.get("/orders", order.listAll);
router.post("/order", order.create);
router.patch("/order", order.update);
router.patch("/orderUpdateStatus", order.updateStatus);
router.delete("/order", authenticated, order.delete);

//favorites
router.get("/favoritesWithEmail", favorite.readByEmail);

//for authencation
router.post("/login", auth.login);
router.post("/login/google", auth.loginByGoogle);
router.post("/register", auth.register);
router.get("/verify", auth.verify);
router.post("/forgotPasswordStep1", auth.forgotPasswordStep1);
router.post("/forgotPasswordStep2", auth.forgotPasswordStep2);

//for notification
router.get("/notification", authenticated, notification.read);
router.get("/notifications", authenticated, notification.listAll);
router.post(
    "/notifications/search",
    authenticated,
    notification.listNotificationSearch
);
router.post("/notification", authenticated, notification.create);
router.put("/notification", authenticated, notification.update);
router.delete("/notification", authenticated, notification.delete);

//for noticeTo
router.get("/noticeTos", authenticated, noticeTo.listNoticeTos);
router.post("/noticeTo", authenticated, noticeTo.create);
router.put("/noticeTo", authenticated, noticeTo.update);
router.delete("/noticeTo", authenticated, noticeTo.delete);

//for evaluate
router.get("/evaluates", evaluate.listAll);
router.get("/evaluate", evaluate.read);
router.get("/evaluate/bytour", evaluate.readByIdTour);
router.post("/evaluate", authenticated, evaluate.create);
router.put("/evaluate", authenticated, evaluate.update);
router.delete("/evaluate", authenticated, evaluate.delete);

//for post
router.get("/post", post.read);
router.get("/posts", post.listAll);
router.post("/posts/search", post.listPostSearch);
router.post("/post/vote", authenticated, post.votePost);
router.post("/post", authenticated, post.create);
router.put("/post", authenticated, post.update);
router.put("/post/tags", authenticated, post.putTags);
router.delete("/post", authenticated, post.delete);

// for tags and services
// router.get("/tags", tour.)

//report
router.get("/report", authenticated, report.getReport);
router.get(
    "/report-number-of-tourists",
    // authenticated,
    report.getReportNumberOfTourists
);
router.get(
    "/report-number-people-follow-destination",

    report.getReportNumberPeopleFollowDestination
);
router.get(
    "/report-revenue-follow-month",
    authenticated,
    report.getReportRevenueFollowMonthAll
);
router.get("/report/destination-by-time", report.getDestinationByTime);

router.get("/report/destination-by-time", report.getDestinationByTime);

//for timeline
router.get("/timeline", timeline.read);
router.get("/timelines", authenticated, timeline.listAll);
router.post("/timeline/search", authenticated, timeline.listTimelineSearch);
router.post("/timeline", authenticated, timeline.create);
router.put("/timeline", authenticated, timeline.update);
router.delete("/timeline", authenticated, timeline.delete);

router.get("/env", config.env);
router.get("/envs", config.envs);

module.exports = router;
