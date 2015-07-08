using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BookmakerRip.Models;
using MongoDB.Driver;

namespace BookmakerRip.Services.Base
{
	public class ServiceBase
	{
         public const string connectionString = "mongodb://127.0.0.1:27017";
        public MongoClient Client;
        public MongoServer Server;
        public MongoDatabase Database;

        public ServiceBase()
        {
            Client = new MongoClient(connectionString);

            Server = Client.GetServer();
            Server.Connect();
            Database = Server.GetDatabase("BookmakerRip");
        }
	}
}