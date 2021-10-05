const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const low = require("lowdb");

const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

passport.use(
  new JWTstrategy(
    { secretOrKey: "TOP_SECRET", jwtFromRequest: ExtractJWT.fromUrlQueryParameter("jwt_token") },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "signup",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password", passReqToCallback: true },
    (req, email, password, done) => {
      const id = uuidv4();
      db.get("users")
        .push({ id, email, password, username: req.body.username || "", createdAt: Date.now(), updatedAt: Date.now() })
        .write();
      const user = db.get("users").find({ id }).value();
      return done(null, user);
    }
  )
);

passport.use(
  "login",
  new LocalStrategy({ usernameField: "email", passwordField: "password" }, async (email, password, done) => {
    const user = db.get("users").find({ email }).value();
    if (!user) return done(null, false, { message: "Incorrect username." });
    if (user.password !== password) return done(null, false, { message: "Incorrect password." });
    return done(null, user, { message: "Logged in Successfully" });
  })
);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.post("/signup", passport.authenticate("signup", { session: false }), async (req, res, next) => {
  res.json({
    message: "Signup successful",
    user: req.user,
  });
});
server.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { id: user.id, email: user.email, username: user.username };
        const token = jwt.sign({ user: body }, "TOP_SECRET");

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});
server.get("/user", passport.authenticate("jwt", { session: false }), (req, res, next) =>
  res.json({
    message: "You made it to the secure route",
    user: req.user,
    token: req.query.jwt_token,
  })
);
server.use(middlewares);
server.use(router);
server.listen(1234, () => console.log("JSON Server is running"));
