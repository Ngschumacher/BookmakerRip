module BookmakerRip { 
    "use strict";

    export interface IBookmakerService {
        getBookmakers(): ng.IHttpPromise<Bookmaker[]>;
        getBookmaker(bookmakerId : string) : ng.IHttpPromise<Bookmaker>;
        addBookmaker(bookmaker: IBookmaker): ng.IHttpPromise<IBookmaker[]>;
        deleteBookmaker(bookmakerId: string): ng.IHttpPromise<IBookmaker[]>;
    }

    export class BookmakerService {
        static $inject = ["$http"]; 
        
        constructor(private $http: ng.IHttpService) {
        }

        getBookmakers = (): ng.IHttpPromise<Bookmaker[]> => {
            return this.$http.get<Bookmaker[]>("/api/Bookmaker/");
        };
        getBookmaker = (bookmakerId: string): ng.IHttpPromise<Bookmaker> => {
            return this.$http.get<Bookmaker>("/api/Bookmaker/"+bookmakerId);
        }

        addBookmaker = (bookmaker: IBookmaker): ng.IHttpPromise<IBookmaker[]> => {
            return this.$http.post<IBookmaker[]>("/api/Bookmaker/AddBookmaker",  bookmaker );
        }

        deleteBookmaker = (bookmakerId: string): ng.IHttpPromise<IBookmaker[]> => {
            return this.$http.delete('/api/Bookmaker/' + bookmakerId);
        }

    }
    var app = BookmakerRip.getModule();
    app.service("BookmakerService", BookmakerService);
}