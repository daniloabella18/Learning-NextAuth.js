import jwt from "next-auth/jwt"

const secret = process.env.JWT_SECRET

export default async (req, res) => {

    console.log("req: ", req.cookies["next-auth.session-token"])

    try {
        const token = await jwt.getToken({ req, secret })
        console.log("token: ", token)
        const sessionToken = await req.cookies["next-auth.session-token"]


        const args = {
            token,
            sessionToken
        }

        res.status(200).json(args)
        res.end()

    } catch (e) {

        res.status(401).json(e)
        res.end()
    }


}