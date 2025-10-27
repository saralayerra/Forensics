// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MailNotification {
    struct Mail {
        string sender;
        string receiver;
        string subject;
        string body;
        string status; // "Sent" or "Received"
    }

    // Mapping email to messages
    mapping(string => Mail[]) private userMails;

    // Event for mail sent
    event MailSent(string sender, string receiver, string subject);

    // Function to send a mail
    function sendMail(string memory _sender, string memory _receiver, string memory _subject, string memory _body) public {
        // Store mail for sender (as "Sent")
        userMails[_sender].push(Mail(_sender, _receiver, _subject, _body, "Sent"));

        // Store mail for receiver (as "Received")
        userMails[_receiver].push(Mail(_sender, _receiver, _subject, _body, "Received"));

        emit MailSent(_sender, _receiver, _subject);
    }

    // Function to retrieve mails for a specific email (both sent and received)
    function getMails(string memory _email) public view returns (Mail[] memory) {
        return userMails[_email];
    }
}
