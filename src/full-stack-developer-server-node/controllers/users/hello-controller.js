const helloController = (app) => {
    app.get("/hello", (request, response) => {
        response.send("Life is good!");
    });
}

export default helloController;
    