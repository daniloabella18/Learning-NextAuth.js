import { getCsrfToken } from "next-auth/client"

export default async (req, res) => {
  const csrfToken = await getCsrfToken({ req })
  console.log("req: ", req)
  console.log("csrfToken: ", csrfToken)

  res.status(200).json({ "token": csrfToken })
  res.end()
}