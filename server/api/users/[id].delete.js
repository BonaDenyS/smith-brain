export default defineEventHandler(async (event) => {
    const user = await prisma.users.delete(({
        where: {
            Id: parseInt(event.context.params.id)
        },
        //include: { author: true }
    }))
    return user;
});