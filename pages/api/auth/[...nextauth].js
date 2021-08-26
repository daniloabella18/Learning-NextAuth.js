import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `jwt` is automatically set to `true` if no database is specified.
        jwt: {
            signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
            // Set to true to use encryption. Defaults to false (signing only).
            encryption: true,
        },
    }

    // A database is optional, but required to persist accounts in a database
    //database: process.env.DATABASE_URL,
})