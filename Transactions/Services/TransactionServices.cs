using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Transactions.Models;

namespace Transactions.Services
{
    public class TransactionServices
    {
        private readonly IMongoCollection<TransactionModel> _transactionCollection;
        public TransactionServices(IOptions<StoreSettings> storeSettings)
        {
            MongoClient client = new MongoClient(storeSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(storeSettings.Value.DatabaseName);
            _transactionCollection = database.GetCollection<TransactionModel>(storeSettings.Value.CollectionName);
        }

        public async Task<List<TransactionModel>> GetAsync() => await _transactionCollection.Find(_ => true).ToListAsync();

        public async Task<TransactionModel?> GetAsync(string id) => await _transactionCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(TransactionModel newTransaction) => await _transactionCollection.InsertOneAsync(newTransaction);

        public async Task UpdateAsync(string id, TransactionModel updatedTransaction) => await _transactionCollection.ReplaceOneAsync(x => x.Id == id, updatedTransaction);

        public async Task RemoveAsync(string id) => await _transactionCollection.DeleteOneAsync(x => x.Id == id);
    }
}
