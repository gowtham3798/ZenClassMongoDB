//Design database for Zen class programme//

//Find all the topics and tasks which are thought in the month of October
db.users.find({month: 'October'},{topics :1 ,tasks :1}).pretty()

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({     
    date:{$gt : 15-oct-2020,$lt : 31-oct-2020} }).pretty() 

    //Find all the company drives and students who are appeared for the placement. 
    db.users.find({},{company_drives:1,students:1}).pretty()
    
    //Find the number of problems solved by the user in codekata
    db.codekata.find({},{number_of_problems:1})
    
    //Find all the mentors with who has the mentee's count more than 15
    db.mentors.find({mentee_count : {$gt : 15}}).pretty()
    
    //Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
    db.users.aggregate([
        {$match:{attendance:'absent',task:'not submitted',date:{$gt : 15-oct-2020,$lt : 31-oct-2020} }},
        {
            $group:{_id:'$name',myCount: { $sum: 1 } }
          },
    { $project: { _id: 0 } }
  ])
