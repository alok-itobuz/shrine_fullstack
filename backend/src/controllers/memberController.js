import members from '../devData/members.js'

export const getMembers = (req, res) => {
    res.status(200).json(members)
}