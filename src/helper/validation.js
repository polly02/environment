function isValidId(req, res, next) {
    const { id } = req.params
    if (!id) throw new Error("id not found")
    if (isNaN(id)) throw new Error("id is not a number")
    next()
}

function isValidSkills(req, res, next) {
    const {label, category, priority} = req.body
    if(!isNaN(label)) throw new Error("label is not a text")
    if(!isNaN(category)) throw new Error("category is not a text")
    if(isNaN(priority)) throw new Error("priority is not a number")
    next()
}

module.exports = { isValidId, isValidSkills }