import express from 'express'
import nodemailer from 'nodemailer'

const contactRouter = express.Router()

contactRouter.post('/', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  try {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject: 'Portfolio Contact Form Message',
      text: message,
    })

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Email send failed:', err)
    res.status(500).json({ error: 'Failed to send message' })
  }
})

export default contactRouter
