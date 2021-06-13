const express = require('express');
const app = express();

require('dotenv').config();
const admin = require('../../../../firebase/database');
const db = admin.firestore();


//get about 
app.get("/about",async (req,res)=>{
    let about=[]
   const about_info = await db.collection('about').get()
  if (about_info.docs.length > 0) {
    for (const info of about_info.docs) {
     about.push(about_info.data())
     
  }}
  res.json(about);
  res.status(200);

});
//post about
app.post("/about",async (req,res) =>{
    let docref = await db.collection("about").add({
        sth :req.body.about.sth,
    });
    res.json({message:"Done"});
    res.status(200);

});
//update about
app.put("/about/:id",async (req,res)=>{
  let docref =  db.collection("about").doc(req.body.user.name);
  await docref.update({
      sth:req.body.about.sth
  });
  res.json({message:"Done"});
  res.status(200);
});
//delete about
app.delete("/about:id",async (req,res) =>{
    await db.collection().doc(req.body.id).delete();
    res.json({message:"done"});
    res.status(200);
});

module.exports = app;