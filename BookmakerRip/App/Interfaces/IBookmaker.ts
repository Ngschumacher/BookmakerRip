module BookmakerRip {
    export interface IBookmaker {
        id : string;
        name : string;
    }
    
    export interface IRouteParams extends ng.route.IRouteParamsService {
        matchId: string;
        bookmakerId : string;
    }

}