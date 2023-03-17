using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Transactions.Models
{
    public class TransactionModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string TransactionCode { get; set; } = null!;
        public string TransactionDescription { get; set; } = null!;
        public int TransactionValue { get; set; }
        public DateTime TransactionDate { get; set; } = DateTime.Now;
    }
}
