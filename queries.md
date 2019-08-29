# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

```sql
SELECT ps.ProductName as p, categories.CategoryName AS c
FROM products as ps
INNER JOIN categories
ON ps.CategoryID = categories.CategoryID;
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

```sql
SELECT orders.OrderID, orders.OrderDate, shippers.ShipperName
FROM orders
INNER JOIN shippers
ON orders.ShipperID = shippers.ShipperID
WHERE OrderDate < '1997-01-09';
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```sql
SELECT products.ProductName, order_details.Quantity, orders.OrderID
FROM products
INNER JOIN order_details ON products.ProductID = order_details.ProductID
INNER JOIN orders ON orders.OrderID = order_details.OrderID
WHERE orders.OrderID = 10251
ORDER BY products.ProductName;
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```sql
SELECT orders.OrderID as OrderNumber, customers.ContactName as CustomerName, employees.LastName as EmployeeLastName
FROM orders
INNER JOIN customers ON customers.CustomerID = orders.CustomerID
INNER JOIN employees ON employees.EmployeeID = orders.EmployeeID;
```

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

```sql
SELECT categories.CategoryName, COUNT(*) AS Count
from categories
INNER JOIN products ON products.CategoryID = categories.CategoryID
GROUP BY categories.CategoryName;
```

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

```sql
SELECT orders.OrderID, COUNT(*) AS ItemCount
FROM orders
INNER JOIN order_details ON order_details.OrderID = orders.OrderID
GROUP BY orders.OrderID;
```
