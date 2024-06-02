
const handleGetAll = (Teacher) => (req,res) => {

    Teacher.find({}).then(data=>res.json(data)).catch(e=>res.json(e))
}

module.exports = handleGetAll