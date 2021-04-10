const Data = require("../../model/vaccineData");
const ocrSpace = require('ocr-space-api-wrapper');

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

 
exports.main = async () => {
  try {
    // Using the OCR.space default free token + remote file
    //const res1 = await ocrSpace('http://dl.a9t9.com/ocrbenchmark/eng.png')
 
    // Using your personal token + local file
    const res2 = await ocrSpace('./CovidReport.pdf', { apiKey: 'bd623620c088957' , isTable : true})
    console.log(res2.ParsedResults[0].ParsedText) 
    return res.json({
        data: res2
    });
    // Using your personal token + base64 image + custom language
    //const res3 = await ocrSpace('data:image/png;base64...', { apiKey: '<API_KEY_HERE>', language: 'ita' })
  } catch (error) {
    console.log(error)
    return res.json({
        data:error
    });
  }
}
