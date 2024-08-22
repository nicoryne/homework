<?php
require_once(dirname(__FILE__) ."/connect.php");
var_dump($_POST);
if (isset($_POST["submit"])) {
    if (isset($_POST['ticketId'], $_POST['userId'], $_POST['transactionId'], $_POST['officeId'], $_POST['bookingDate'], $_POST['status'])) {
        $ticketId = $_POST['ticketId'];
        $userId = $_POST['userId'];
        $transactionId = $_POST['transactionId'];
        $officeId = $_POST['officeId'];
        $bookingDate = $_POST['bookingDate'];
        $status = $_POST['status'];
        
        $sql = "INSERT INTO bookingticket (TicketID, UserID, TransactionID, OfficeID, BookingDate, Status) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssss", $ticketId, $userId, $transactionId, $officeId, $bookingDate, $status);

        if ($stmt->execute()) {
            echo "Data stored in database successfully";
        } else {
            echo "ERROR: " . $sql . "<br>" . $conn->error;
        }

        $stmt->close();
    } else {
        echo "ERROR: Required fields are not set";
    }
}

$conn->close();
