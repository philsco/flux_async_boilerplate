

import xhr from 'xhr';

function fetcher ( auth, key, tmethod, path, payload ) {
    const endpoint = 'http://localhost:3030';      
    let fullUri = endpoint + path;

    let head = {};
    head['Content-Type'] = 'application/json';
    head['Access-Control-Allow-Headers'] = auth;
    head['Authorization'] =  'auth_token';

    return new Promise (( resolve, reject ) => {
        xhr[tmethod]( fullUri, {
            body: JSON.stringify( payload ),
            headers: head
        }, function (err, res, body) {
            if (err) {
                reject(err);
                return;
            }
            
            if (res.statusCode !== 200) {
                reject(new Error('[status: ' + res.statusCode + '] ' + res.body));
                    return
            }

            if (body == null) {
                resolve(undefined);
            }
            
            if (typeof body !== 'string') {
                reject(new Error('Responses from server must be JSON strings.'));
            }

            try {
                resolve(JSON.parse(body));
            } catch (e) {
                reject(new Error('Responses from server must be JSON strings.'));
            }
        })
    }); 
}

class ApiOps {
    constructor( auth, apikey ) {
        this.auth = auth;
        this.apikey = apikey;
        }

    static get ( auth, key, path ) {
        return fetcher ( '', '', 'get', path );
    }

    static post  ( auth, key, path, payload ) {
        return fetcher ( '', '', 'post', path, payload );
    }

    static delete ( auth, key, path, id ) {
        let delPath = path + '/' + id;
        return fetcher ( '', '', 'del', delPath );
    }
}


export default ApiOps;