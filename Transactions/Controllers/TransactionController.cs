using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Transactions.Models;
using Transactions.Services;

namespace Transactions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly TransactionServices _transactionServices;

        public TransactionController(TransactionServices transactionServices)
        {
            _transactionServices = transactionServices;
        }

        [HttpGet]
        public async Task<List<TransactionModel>> Get() => await _transactionServices.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<TransactionModel?>> Get(string id)
        {
            var transaction = await _transactionServices.GetAsync(id);

            if (transaction is null)
            {
                return NotFound();
            }

            return transaction;
        }

        [HttpPost]
        public async Task<IActionResult> Post(TransactionModel newTransaction)
        {
            await _transactionServices.CreateAsync(newTransaction);
            return CreatedAtAction(nameof(Get), new { id = newTransaction.Id }, newTransaction);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, TransactionModel updatedTransaction)
        {
            var transaction = await _transactionServices.GetAsync(id);

            if (transaction is null)
            {
                return NotFound();
            }
            updatedTransaction.Id = transaction.Id; 
            await _transactionServices.UpdateAsync(id, updatedTransaction);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var transaction = await _transactionServices.GetAsync(id);

            if (transaction is null)
            {
                return NotFound();
            }
            await _transactionServices.RemoveAsync(id);
            return NoContent();
        }
    }
}
