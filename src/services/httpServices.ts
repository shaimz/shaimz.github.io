import http from '../../http-common';

class httpServices{
    getStatus(id: number): Promise<any>{
        return http.post('/status',{id:id});
    }
}

export default new httpServices();