// Event handler for DELETE request to delete a user
export default defineEventHandler(async () => {
    try {
        const users = await prisma.users.findMany();
        return users;
    } catch (error) {
        // Return error if fetching users fails
        return {
            status: 500,
            body: { message: 'Failed to fetch users' }
        };
    }
});