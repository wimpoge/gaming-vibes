exports.handler = async () => {
    console.log('Hello from the server side');

    const data = { name: 'John Doe', age: '42' };

    // return response to browser
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}