const cron= require("node-schedule")

const nodejs_Cronjob=cron.scheduleJob('*/2 * * * * *',()=>{
    console.log("Cron")
    nodejs_Cronjob.cancel()
})
