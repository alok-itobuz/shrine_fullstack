import events from "../devData/events.js"

export const getEvents = (req, res) => {
    res.status(200).json(events)
}