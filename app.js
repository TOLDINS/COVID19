const express=require('express');
const mongoose=require('mongoose');
const app=express();
const public=require('./Routes/public');
app.use('/',public);

mongoose
	.connect(
		'mongodb+srv://covid19-hwa8e.mongodb.net/test',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		err => {
			if (err) {
				console.log(err);
			}
		},
	)
	.then(() => {
		console.log('Data Base connected!');
	})
	.catch(err => {
		console.log(err);
	});

module.exports=app