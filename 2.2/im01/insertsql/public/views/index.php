<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EdTech Express | Table</title>
</head>
<body>
    <form action="index.php" method="post">
        <div class="inputs-container">
            <div class="input-set">
                <label for="ticketId" class="input-label">Ticket ID: </label>
                <input type="text" class="input-value" id="ticketId" name="ticketId">
            </div>
            <div class="input-set">
                <label for="userId" class="input-label">User ID: </label>
                <input type="text" class="input-value" id="userId" name="userId">
            </div>
            <div class="input-set">
                <label for="transactionId" class="input-label">Transaction ID: </label>
                <input type="text" class="input-value" id="transactionId" name="transactionId">
            </div>
            <div class="input-set">
                <label for="officeId" class="input-label">Office ID: </label>
                <input type="text" class="input-value" id="officeId" name="officeId">
            </div>
            <div class="input-set">
                <label for="bookingDate" class="input-label">Booking Date: </label>
                <input type="datetime-local" class="input-value" id="bookingDate" name="bookingDate">
            </div>
            <div class="input-set">
                <label for="status" class="input-label">Status: </label>
                <select id="status" name="status">
                    <option value="success">SUCCESS</option>
                    <option value="pending">PENDING</option>
                    <option value="cancelled">CANCELLED</option>
                </select>
            </div>
        </div>
        <button type="submit" id="btn-submit" name="submit" value="submit">Submit</button>
        <button id="btn-clear">Clear</button>
    </form>
    <div class="table-container">
        <table id="table-bticket" class="table-edtech">
            <thead id="table-header-bticket" class="table-edtech-header">
                <th>TicketID</th>
                <th>UserID</th>
                <th>TransactionID</th>
                <th>OfficeID</th>
                <th>Booking Date</th>
                <th>Status</th>
            </thead>
            <tbody id="table-body-bticker" class="table-edtech-body">
            </tbody>
        </table>
    </div>
    <?php require_once(dirname(__DIR__).'/src/php/bticket.php');?>
</body>