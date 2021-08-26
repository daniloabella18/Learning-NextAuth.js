import jwt from "next-auth/jwt"

const secret = process.env.JWT_SECRET

export default async (req, res) => {
    const token = await jwt.getToken({ req, secret })
    console.log("req: ", req)
    console.log("JSON Web Token: ", token)
    console.log("secret: ", secret)

    res.status(200).json({ "token": token })

    res.end()
}