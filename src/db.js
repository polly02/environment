const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: "5432",
    database: "user_skills",
    password: "zapm1907"
})

module.exports = pool