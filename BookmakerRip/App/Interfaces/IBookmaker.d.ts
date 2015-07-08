declare module BookmakerRip {
    interface IBookmaker {
        id: string;
        name: string;
    }
    interface IRouteParams extends ng.route.IRouteParamsService {
        matchId: string;
        bookmakerId: string;
    }
}
