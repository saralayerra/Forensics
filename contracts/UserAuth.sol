// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserAuth {
    struct User {
        string userId; // Unique user identifier (similar to Ethereum address)
        string name;
        string email;
        string phone;
        string password;
        string role;
    }

    uint256 private userCount = 0; // Counter for generating unique user IDs
    mapping(string => User) private users; // Mapping to store users by email

    // Event for successful registration
    event UserRegistered(string userId, string email, string role);
    
    // Helper function to generate a unique ID
    function generateUniqueId(string memory _email) private view returns (string memory) {
        bytes32 hash = keccak256(abi.encodePacked(_email, block.timestamp, userCount));
        return toHexString(hash);
    }

    // Convert bytes32 to hex string with 0x prefix
    function toHexString(bytes32 _hash) private pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdef";
        bytes memory str = new bytes(42);
        str[0] = '0';
        str[1] = 'x';
        for (uint256 i = 0; i < 20; i++) {
            str[2 + i * 2] = alphabet[uint8(_hash[i] >> 4)];
            str[3 + i * 2] = alphabet[uint8(_hash[i] & 0x0f)];
        }
        return string(str);
    }

    // Register function
    function register(
        string memory _name,
        string memory _email,
        string memory _phone,
        string memory _password,
        string memory _role
    ) public {
        // Ensure the email is not already registered
        require(bytes(users[_email].userId).length == 0, "Email is already registered");

        // Increment user count
        userCount++;

        // Generate unique user ID
        string memory uniqueId = generateUniqueId(_email);

        // Store user data
        users[_email] = User(uniqueId, _name, _email, _phone, _password, _role);

        // Emit an event on successful registration
        emit UserRegistered(uniqueId, _email, _role);
    }

    // Login function
    function login(string memory _email, string memory _password) 
        public 
        view 
        returns (string memory, string memory, string memory, string memory) 
    {
        // Ensure the user exists
        require(bytes(users[_email].userId).length != 0, "User not found");

        // Validate password
        require(
            keccak256(abi.encodePacked(users[_email].password)) == keccak256(abi.encodePacked(_password)),
            "Invalid password"
        );

        // Return user details (excluding password)
        return (users[_email].userId, users[_email].name, users[_email].email, users[_email].role);
    }
}