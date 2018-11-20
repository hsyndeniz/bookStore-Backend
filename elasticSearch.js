let elasticsearch = require("elasticsearch");
let elasticClient;

export default getElasticInstance = () => {
    if (elasticClient)
        return elasticClient;
    elasticClient = new elasticsearch.Client({
        host: 'localhost:9200'
    });
    return elasticClient;
};