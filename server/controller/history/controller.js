
const { History } = require('../../models');


const getAll = async (req, res) => {

    console.log("Entre");
    try {
        const list = await History.findAll();
        return res.status(201).json({
            list,
        });
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAll
}