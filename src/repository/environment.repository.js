const pool = require("../db")

class EnvironmentDB {

async getEnvironmentDB() {
    const client = await pool.connect()
    const sql = "SELECT * FROM environment"
    const data = (await client.query(sql)).rows
    return data
}

async getEnvironmentByIdDB(id){
    const client = await pool.connect()
    const sql = "SELECT * FROM environment WHERE id=$1"
    const data = (await client.query(sql, [id])).rows
    return data
}

async createEnvironmentDB(label, category, priority) {
    const client = await pool.connect()
    const sql = "INSERT INTO environment(label, category, priority) VALUES ($1, $2, $3) RETURNING *"
    const data = (await client.query(sql, [label, category, priority])).rows
    return data
}

async updateEnvironmentDB(id, label, category, priority){
    const client = await pool.connect()
    const sql = "UPDATE environment SET label=$1, category=$2, priority=$3 WHERE id=$4 RETURNING *"
    const data = (await client.query(sql, [label, category, priority, id])).rows
    return data
}

async deleteEnvironmentDB(id) {
    const client = await pool.connect()
    const sql = `DELETE FROM environment where id=$1 RETURNING *`
    const data = (await client.query(sql, [id])).rows
    return data
}

async patchEnvironmentDB(id, dataFromClient) {
    const client = await pool.connect()
    const sql = "SELECT * from environment where id=$1"
    const data = (await client.query(sql, [id])).rows[0]
    const mergedData = { ...data, ...dataFromClient }
    const sql2 = `UPDATE environment SET label=$1, category=$2, priority=$3 WHERE id=$4 RETURNING *`
    const data2 = (await client.query(sql2, [mergedData.label, mergedData.category, mergedData.priority, id])).rows
    return data2
}
}

module.exports = { EnvironmentDB }