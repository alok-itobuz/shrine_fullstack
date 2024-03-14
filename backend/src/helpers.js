export const sendMail = async (nodemailer, user, pass, toEmail) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user,
            pass
        },
    });

    const info = await transporter.sendMail({
        from: `"Hello from alok" <${user}>`, // sender address
        to: `${toEmail}`, // list of receivers
        subject: "Verification for SHRINE", // Subject line
        text: "Please verify this", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log(info)
}