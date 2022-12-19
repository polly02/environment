const { EnvironmentDB } = require("../repository/environment.repository")
const ExceptionType = require("../exceptions/exceptions.type")
const environmentDB = new EnvironmentDB()

class Service {

    async getEnvironment() {
        const environment = await environmentDB.getEnvironmentDB()
        if (!environment.length) throw new Error(ExceptionType.ENVIRONMENT_NOT_FOUND_GET)
        return environment
    }

    async getEnvironmentById(id) {
        const environment = await environmentDB.getEnvironmentByIdDB(id)
        if (!environment.length) throw new Error(ExceptionType.ENVIRONMENT_NOT_FOUND_GET_BY_ID)
        return environment
    }

    async createEnvironment(label, category, priority) {
        const environment = await environmentDB.createEnvironmentDB(label, category, priority)
        if (!environment.length) throw new Error(ExceptionType.ENVIRONMENT_NOT_FOUND_POST)
        return environment
    }

    async updateEnvironment(id, label, category, priority) {
        const environment = await environmentDB.updateEnvironmentDB(id, label, category, priority)
        if (!environment.length) throw new Error(ExceptionType.ENVIRONMENT_NOT_FOUND_PUT)
        return environment
    }

    async deleteEnvironment(id) {
        const environment = await environmentDB.deleteEnvironmentDB(id)
        if (!environment.length) throw new Error(ExceptionType.ENVIRONMENT_NOT_FOUND_DELETE)
        return environment
    }

    async patchEnvironment(id, dataFromClient) {
        const environment = await environmentDB.patchEnvironmentDB(id, dataFromClient)
        if (!environment.length) throw new Error(ExceptionType.ENVIRONMENT_NOT_FOUND_PATCH)
        return environment
    }
}

module.exports = { Service }