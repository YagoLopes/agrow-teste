const Demand = require("../models/Demand");

module.exports = {
    async index(req, res) {
        const demands = await Demand.find();

        return res.json(demands);
    },
    async show(req, res) {
        const demand = await Demand.findById(req.params.id);
        return res.json(demand);
    },

    async store(req, res) {
        const demand = await Demand.create(req.body);

        return res.json(demand);
    },
    async update(req, res) {
        const demand = await Demand.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );
        return res.json(demand);
    },
    async destroy(req, res) {
        await Demand.findByIdAndRemove(req.params.id);

        return res.send();
    }
};