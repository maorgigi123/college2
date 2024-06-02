const AddData = (Tech) => async(req,res) => {
    const {fullName, id, wage,profession} = req.body;


    const have_tech = await Tech.exists({ fullName: fullName})
    if(have_tech)
        return res.status(404).json('this username is alerdy in used')

    try{
        const tech = new Tech({
            fullName,
            id,
            wage,
            profession
        })
        tech.save().then( (p) => {
            res.json(p)
        });
    }catch(e){
        res.status(404).json('save')
        console.log(e.message)
    }
    

}

module.exports = AddData