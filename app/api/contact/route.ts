import { NextApiRequest } from "next"

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "",
    pass: "",
  },
})

export function POST(req: NextApiRequest) {
  transporter.sendMail(
    {
      to: "rizwanamjadnov@gmail.com",
      subject: "",
      text: "",
    },
    (err) => console.log(err)
  )
  return Response.json({ message: "Hello from Next.js!" })
}
