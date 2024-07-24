const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");


// My TODO: create the route and calculation for time using distance and speed.
router.post("/calculate-time", async (req,res) => {
    const {distance, speed} = req.body;
    const timeInSeconds = distance / speed;
    
    const practice = new practice({
        distance,
        speed,
        calculatedTime: timeInSeconds
    });
    
    try{
        await practice.save(); return
        res.status(201).json({timeInSeconds});
    } catch (err) {
        res.status(500).json({error: 'Error saving trip data'});
    }
});
//not sure about this?
router.get('/', async (req,res) => {
    const calculations = await Calculation.find();
    res.json(calculations);
})

module.exports = router

