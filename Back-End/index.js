const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
var cors = require("cors");
const passport = require("passport");
const GoogleTokenStrategy = require("passport-google-token").Strategy;
const authConfig = require("./config/auth.config");

const app = express();

// setting api Doc
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "TravelGo API",
            version: "1.0.0",
            description: "The Document of TravelGo API",
        },
        servers: [
            {
                url: "http://localhost:4040",
            },
        ],
    },
    apis: ["./routes/api.js"],
};
const specs = swaggerJsDoc(options);
app.use("/api/v1", swaggerUI.serve, swaggerUI.setup(specs));

// settings
app.set("port", process.env.PORT || 4040);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cookieParser(process.env.SECRET));
app.use(cookieParser("dnloster"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Language, Accept-Language, Last-Event-ID, X-Requested-With"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("credentials", true); // required to pass);

    next();
});

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
    next();
});

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        // "https://localhost:9000",
        // "https://localhost:9999",
    ], // reqexp will match all prefixes
    default: "http://localhost:3000",
    methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS,PUT",
    credentials: true, // required to pass
    // allowedHeaders:
    // "Content-Type, Authorization, Content-Language, Accept-Language, Last-Event-ID, X-Requested-With"
};

if (process.env.NODE_ENV === "production") {
    app.use(
        cors({
            origin: [
                process.env.FRONT_END,
                process.env.ADMIN_FRONT_END,
                "http://localhost:3000",
                "http://localhost:3001",
                // "https://localhost:9000",
                // "https://localhost:9999",
            ],
            methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS,PUT",
            credentials: true, // required to pass
        })
    );
} else {
    app.use(cors(corsOptions));
}

app.use("/", require("./routes/api"));

app.listen(app.get("port"), function () {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
});

passport.use(
    new GoogleTokenStrategy(
        {
            clientID: authConfig.GOOGLE_CLIENT_ID,
            clientSecret: authConfig.GOOGLE_CLIENT_SECRET,
        },
        (accessToken, refreshToken, profile, done) => done(null, profile._json)
    )
);
