export default defineEventHandler(async (event) => {
    const { Name, Surname, Email } = await readBody(event)

    const user = await prisma.users.create({
        data: {
            Name, Surname, Email
        },
    })
    return user
})