const path = require("path");

module.exports = function (app) {
    // GET INDEX
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    // GET EXERCISE PAGE
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })

    // GET STATS
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    })
}