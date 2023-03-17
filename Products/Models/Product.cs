using System;
using System.Collections.Generic;

namespace Products.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string ProductName { get; set; } = null!;

    public string ProductDescription { get; set; } = null!;

    public int? Price { get; set; }
}
