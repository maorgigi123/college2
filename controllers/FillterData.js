
const FilterData = (Teacher) => async(req,res) => {
    const {wage} = req.body;
    try{
        const techer = await Teacher.find({}).where('wage').lte((wage === ''? 0 : wage));
        res.json(techer)
    }
    catch(e){
        res.status(404).json(e)
    }

}

module.exports = FilterData