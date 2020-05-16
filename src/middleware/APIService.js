import APIServiceEndpoint from './APIServiceEndpoint';

class APIService {
    construction(address, port='8080') {
        this.address = address;
        this.port = port;
        this.endpoints = new Map();
    }

    add(endpoint) {
        if (!endpoint instanceof APIServiceEndpoint) {
            throw Error("Must provide APIServiceEndpoint instance");
        }
        this.endpoints.set(endpoint.name, endpoint);
    }

    get(name) {
        return this.endpoints.get(name);
    }

    getURL(name, params=null) {
        const endpoint = this.get(name);
        const endpointParamKeys = Object.keys(endpoint.params);
        var url = 'http://' + this.address + ':' + this.port + '/' + endpoint.urlName;

        if (params != null) {
            var paramsToPass = [];
            const paramEntries = Object.entries(params);

            // Select valid parameters and corresponding value
            for (const [key, value] of paramEntries) {
                if (endpointParamKeys.includes(key)) {
                    paramsToPass.push({ key: key, value: value });
                }
            }

            // If parameters are passed via URL, create param string
            if (endpoint.paramType === 'url') {
                var paramsInURL = '?';
                for (const [key, value] of paramsToPass) {
                    paramsInURL += key + '=' + value
                }
            }
        }
    }
}

export default APIService;