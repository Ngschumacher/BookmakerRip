declare module BookmakerRip {
    interface IBookmakerService {
        getBookmakers(): ng.IHttpPromise<Bookmaker[]>;
        getBookmaker(bookmakerId: string): ng.IHttpPromise<Bookmaker>;
        addBookmaker(bookmaker: IBookmaker): ng.IHttpPromise<IBookmaker[]>;
        deleteBookmaker(bookmakerId: string): ng.IHttpPromise<IBookmaker[]>;
    }
    class BookmakerService {
        private $http;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        getBookmakers: () => ng.IHttpPromise<Bookmaker[]>;
        getBookmaker: (bookmakerId: string) => ng.IHttpPromise<Bookmaker>;
        addBookmaker: (bookmaker: IBookmaker) => ng.IHttpPromise<IBookmaker[]>;
        deleteBookmaker: (bookmakerId: string) => ng.IHttpPromise<IBookmaker[]>;
    }
}
