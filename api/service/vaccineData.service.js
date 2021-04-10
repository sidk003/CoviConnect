const Data = require("../../model/vaccineData");
const ocrSpace = require('ocr-space-api-wrapper');
var jwt = require("jsonwebtoken");

exports.addVaccineData = async (req,res) => {
    const { username,fname,lname,age,occupation,vaccineTaken,dosesTaken,hospital,hospitalAddress,locationPinCode,symptoms,medicinesTaken,comments,locationAddress,locationCity,locationState } = req.body;
    //const {   } = req.body;
    try {
        const res3 = await ocrSpace( process.env.URL, { apiKey: 'bd623620c088957', isTable : true})
        var text = res3.ParsedResults[0].ParsedText;
        var parsedText = text.toLowerCase();
        console.log(parsedText);
        if( (parsedText.indexOf(fname.toLowerCase()) !== -1) && ((parsedText.indexOf(lname.toLowerCase()) !== -1))  ){
            try{
                let user = await Data.create({
                    username,
                    fname,
                    lname,
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
                return res.status(200).json({
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
                                    fname,
                                    lname,
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
                        return res.status(200).json({
                            success: true,
                            data: response,
                        });
                    }
                    catch(error){
                        return res.status(401).json({ error: 'Something went wrong' });
                    }
                }
                else{
                    return res.status(401).json({ error: 'Something went wrong' });
                }
                
            }
        }
        else{
            return res.status(204).json({
                message : "name does not match with report"
            });
        }
                
    } 
    catch (error) {
        console.log(error)
        return res.json({
            data:error
        });
    }

    
}

 
exports.main = async (req,res) => {
  try {
    // Using the OCR.space default free token + remote file
    //const res1 = await ocrSpace('http://dl.a9t9.com/ocrbenchmark/eng.png')
    const url = process.env.URL;
    // Using your personal token + local file
    const res3 = await ocrSpace( process.env.URL, { apiKey: 'bd623620c088957', isTable : true})
    const res2 = await ocrSpace('./Co-WIN Application.PDF', { apiKey: 'bd623620c088957' , isTable : true})
    //console.log(res3.ParsedResults[0].ParsedText) 
    var parsedText = res3.ParsedResults[0].ParsedText;
    
    return res.json({
        data: parsedText
    });
    // Using your personal token + base64 image + custom language
    
  } catch (error) {
    console.log(error)
    return res.json({
        data:error
    });
  }
}

exports.getVaccineData = async (req,res) =>{
        const bearerHeader = req.headers["authorization"];
        if (bearerHeader) {
          //if header present then retrieve token
          const bearer = bearerHeader.split(" ");
    
          const bearerToken = bearer[1];
          req.token = bearerToken;
    
            try{
                await jwt.verify(req.token, process.env.JWT_SECRET , async (err, authdata) => {
                    if (err) {
                      return res.status(403).json({
                          status: false,
                          message: "invalid token"
                      });
                    } else {
                      const username = authdata.username;
                      let data = await Data.findOne({username},{_id:false,__v:false});
        
                      if(data){
                        return res.status(200).json({
                            status: true,
                            data
                        });
                      }
                      else{
                          return res.status(204).json({
                              message: "no data found for the username"
                          });
                      }
                    }
                  });
            }catch(e){
                return res.status(404).json({ error: 'Something went wrong' })
            }
          
        }
        else{
            try{
                let data = await Data.find({},{_id:false,__v:false});
                if(data){
                    return res.status(200).json({
                        status: true,
                        data
                    });
                  }
                  else{
                      return res.status(204).json({
                          message: "no data found"
                      });
                  } 
            }
            catch(e){
                return res.status(404).json({ error: 'Something went wrong' })
            }       
        }
}
