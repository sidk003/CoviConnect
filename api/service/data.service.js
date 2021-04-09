const Data = require("../../model/vaccineData");

exports.addData = async (req,res) => {
    const { username,name,age,occupation,vaccineTaken,dosesTaken,hospital,hospitalAddress,locationPinCode,symptoms,medicinesTaken,comments,locationAddress,locationCity,locationState } = req.body;
    //const {   } = req.body;
    try{
        let user = await Data.create({
            username,
            name,
            age,
            occupation,
            vaccineTaken,
            dosesTaken,
            hospital,
            hospitalAddress,
            symptoms,
            medicinesTaken,
            comments,
            locationAddress,
            locationCity,
            locationPinCode,
            locationState,
        });
        return res.status(201).json({
            success: true,
            data: user,
        });
    }
    catch(e){
        if(e.code === 11000){
            try{
                let response = await Data.updateOne(
                    {username},
                    {
                        $set: {
                            name,
                            age,
                            occupation,
                            vaccineTaken,
                            dosesTaken,
                            hospital,
                            hospitalAddress,
                            symptoms,
                            medicinesTaken,
                            comments,
                            locationAddress,
                            locationCity,
                            locationPinCode,
                            locationState
                        }
                        
                    }
                )
                return res.status(201).json({
                    success: true,
                    data: response,
                });
            }
            catch(error){
                return res.status(401);
            }
        }
        else{
            return res.status(401);
        }
        
    }
}