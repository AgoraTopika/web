class APIServiceEndpoint {
    constructor(name, urlName, method, params, paramType) {
        this.name = name;
        this.urlName = urlName;
        this.method = method;
        this.params = params;
        this.paramType = paramType;
    }
}

export default APIServiceEndpoint;