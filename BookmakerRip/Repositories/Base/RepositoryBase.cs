using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;

namespace BookmakerRip.Repositories.Base
{
    public class RepositoryBase
    {
        public const string connectionString = "mongodb://127.0.0.1:27017";
        public MongoClient Client;
        public MongoServer Server;
        public MongoDatabase Database;

        public RepositoryBase()
        {
            Client = new MongoClient(connectionString);

            Server = Client.GetServer();
            Server.Connect();
            Database = Server.GetDatabase("BookmakerRip");
        }
    }
}