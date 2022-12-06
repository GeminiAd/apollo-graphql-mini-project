const { Matchup, Tech } = require('../models');

const resolvers = {
    Query: {
        getAllMatchups: async () => {
            return await Matchup.find({});
        },
        getMatchup: async (parent, { _id }) => {

            return await Matchup.findOne(_id);
        },
        getAllTech: async () => {
            return await Tech.find({});
        },
    },
    Mutation: {
        createMatchup: async (parent, { tech1, tech2 }) => {
            return await Matchup.create({ tech1, tech2 });
        },
        createVote: async (parent, { _id, techNum }) => {
            return await Matchup.findByIdAndUpdate(
                _id,
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;
