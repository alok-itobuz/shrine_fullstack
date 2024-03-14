import nodemailer from 'nodemailer'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { sendMail } from '../helpers.js'
import { ETHEREAL_PASSWORD, ETHEREAL_USERNAME } from '../config/constants.js'
export const postSubscriber = async (req, res) => {
    try {
        console.log(req.body)
        const email = req.body.email
        if (!email) throw new Error('Email is required')
        sendMail(nodemailer, ETHEREAL_USERNAME, ETHEREAL_PASSWORD, email)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            status: ReasonPhrases.BAD_REQUEST,
            message: error.message
        })
    }
}