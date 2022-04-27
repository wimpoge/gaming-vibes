exports.handler = async (event, context) => {
    const guides = [
        {
            title: 'Super Mario',
            description: 'A guide to Super Mario'
        },
        {
            title: 'Super Mario 1',
            description: 'A guide to Super Mario'
        },
        {
            title: 'Super Mario 2',
            description: 'A guide to Super Mario'
        },
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }    
    }

    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'Unauthorized'})
    }
}