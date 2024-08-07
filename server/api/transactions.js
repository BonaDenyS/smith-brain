// Event handler for DELETE request to delete a user
export default defineEventHandler(async (event) => {
    const { start, end } = getQuery(event);
    const startDate = new Date(start || '1900-01-01');
    const endDate = new Date(end || Date());
    try {
        const transaction = await prisma.transaction.findMany({
            where: {
                date: {
                    gte: startDate,
                    lte: endDate,
                },
            },
        });
        return transaction;
    } catch (error) {
        // Return error if fetching users fails
        return {
            status: 500,
            body: { message: 'Failed to fetch users' }
        };
    }
// };
});