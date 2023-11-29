async function connectToServer(uri) {
    try {
        this.client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await this.client.connect();
        this.db = this.client.db(DB_CONSTS.DB_DB);
        // eslint-disable-next-line no-console
        console.log('Successfully connected to MongoDB.');
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}

window.onload = () => {

};