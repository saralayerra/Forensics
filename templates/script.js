
        let web3 = new Web3("HTTP://127.0.0.1:7545");
        const userContractAddress = "0x4a5F92B2A77b3629CF207b9b7116cA1167e42cE1";
        const caseContractAddress = "0xB7F2573394C2203AfD1aEeC28c4EcCfD69683EeC";
        const mailContractAddress = "0x19388520B4Ea2eF61DbeFF3386E6B3c7D6f3d460";
        const userABI = [{
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "userId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "role",
        "type": "string"
      }
    ],
    "name": "UserRegistered",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_phone",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_password",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_role",
        "type": "string"
      }
    ],
    "name": "register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_password",
        "type": "string"
      }
    ],
    "name": "login",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }]; // Add UserAuth ABI
        const caseABI = [{
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "caseId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "caseTitle",
          "type": "string"
        }
      ],
      "name": "CaseCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "caseId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum CaseRegistration.CaseStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "evidence",
          "type": "string"
        }
      ],
      "name": "CaseUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_caseTitle",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "enum CaseRegistration.CaseType",
          "name": "_caseType",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_suspect",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_investigator",
          "type": "string"
        }
      ],
      "name": "newCase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        },
        {
          "internalType": "enum CaseRegistration.CaseStatus",
          "name": "_status",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_evidence",
          "type": "string"
        }
      ],
      "name": "updateCase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_caseId",
          "type": "uint256"
        }
      ],
      "name": "viewCase",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "enum CaseRegistration.CaseType",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "enum CaseRegistration.CaseStatus",
          "name": "",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "viewAllCases",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "caseId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "caseTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "enum CaseRegistration.CaseType",
              "name": "caseType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "suspect",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "investigator",
              "type": "string"
            },
            {
              "internalType": "enum CaseRegistration.CaseStatus",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "evidence",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "evidenceExists",
              "type": "bool"
            }
          ],
          "internalType": "struct CaseRegistration.Case[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }]; // Add CaseRegistration ABI
        const mailABI = [ {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "sender",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "receiver",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "subject",
          "type": "string"
        }
      ],
      "name": "MailSent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_sender",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_receiver",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_subject",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_body",
          "type": "string"
        }
      ],
      "name": "sendMail",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        }
      ],
      "name": "getMails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "sender",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "receiver",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "subject",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "body",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "status",
              "type": "string"
            }
          ],
          "internalType": "struct MailNotification.Mail[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }];
        let userContract = new web3.eth.Contract(userABI, userContractAddress);
        let caseContract = new web3.eth.Contract(caseABI, caseContractAddress);
        let mailContract = new web3.eth.Contract(mailABI, mailContractAddress);

      // Role-based permissions for the sidebar
const rolePermissions = {
  "Suspect": ["workProfile", "logout"],
  "Investigator": ["caseForm", "updateCaseForm", "viewCaseForm", "viewAllCasesForm", "emailForm", "viewMails", "logout"],
  "ForensicAnalyst": ["workProfile", "emailForm", "viewMails", "logout"],
  "StegoAnalyst": ["workProfile", "emailForm", "viewMails", "logout"],
  "HigherAuthority": ["workProfile","viewCaseForm", "logout"]
};

        function showLogin() {
            document.getElementById("registerSection").classList.add("hidden");
            document.getElementById("loginSection").classList.remove("hidden");
        }

        function showRegister() {
            document.getElementById("loginSection").classList.add("hidden");
            document.getElementById("registerSection").classList.remove("hidden");
        }

        async function registerUser() {
            let name = document.getElementById("regName").value;
            let email = document.getElementById("regEmail").value;
            let phone = document.getElementById("regPhone").value;
            let password = document.getElementById("regPassword").value;
            let role = document.getElementById("regRole").value;
            if (!name || !email || !phone || !password || !role) {
      alert("All fields are required!");
      return;
    }
            let accounts = await web3.eth.getAccounts();
            await userContract.methods.register(name, email, phone, password, role).send({ from: accounts[0], gas: 300000 });
             alert("Registration Successful! Please log in.");
            showLogin();
        }

        async function loginUser() {
            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;
            if (!email ||  !password ) {
      alert("All fields are required!");
      return;
    }
            try {
                let userData = await userContract.methods.login(email, password).call();
                document.getElementById("userId").innerText = userData[0];
                document.getElementById("userName").innerText = userData[1];
                document.getElementById("userEmail").innerText = userData[2];
                document.getElementById("userRole").innerText = userData[3];
                document.getElementById("senderEmail").value = userData[2];
                document.getElementById("viewSenderEmail").value = userData[2];
                document.getElementById("loginSection").classList.add("hidden");
                document.getElementById("dashboardSection").classList.remove("hidden");
                updateSidebarPermissions(userData[3]);
                         } catch (error) {
                alert("Login failed! Please check your credentials.");
            }
            
        }
// Function to update sidebar based on user role
function updateSidebarPermissions(role) {
  const allowedButtons = rolePermissions[role] || [];

  document.querySelectorAll(".sidebar button").forEach(button => {
      if (allowedButtons.includes(button.dataset.target) || button.innerText === "Logout") {
          button.style.display = "block";
      } else {
          button.style.display = "none";
      }
  });
}

// Function to handle sidebar navigation
document.querySelectorAll(".sidebar button").forEach(button => {
  button.addEventListener("click", function () {
      document.querySelectorAll(".main-content .container").forEach(section => {
          section.classList.add("hidden");
      });

      const targetSection = this.dataset.target;
      if (targetSection) {
          document.getElementById(targetSection).classList.remove("hidden");
      }
  });
});
     
        
        async function registerCase() {
            let caseTitle = document.getElementById("caseTitle").value;
            let caseDesc = document.getElementById("caseDesc").value;
            let caseSuspect = document.getElementById("caseSuspect").value;
            let caseInvestigator = document.getElementById("caseInvestigator").value;
            let accounts = await web3.eth.getAccounts();
            let caseId = Math.floor(Math.random() * 1000);
            await caseContract.methods.newCase(caseId, caseTitle, caseDesc, 0, caseSuspect, caseInvestigator).send({ from: accounts[0], gas: 300000 });
            alert("Case Registered Successfully!");
        }
        async function updateCase() {
          let caseId = document.getElementById("updateCaseId").value;
          let status = document.getElementById("status").value;
          let evidence = document.getElementById("evidence").value;
          let accounts = await web3.eth.getAccounts();
          await caseContract.methods.updateCase(caseId, status, evidence).send({ from: accounts[0], gas: 3000000 });
          alert("Case Updated Successfully!");
      }

        async function sendEmail() {
            let sender = document.getElementById("senderEmail").value;
            let receiver = document.getElementById("receiverEmail").value;
            let subject = document.getElementById("emailSubject").value;
            let body = document.getElementById("emailBody").value;

            if (!receiver || !subject || !body) return alert("All fields are required");

            let accounts = await web3.eth.getAccounts();
            await mailContract.methods.sendMail(sender, receiver, subject, body).send({ from: accounts[0],gas:300000 });
            alert("Email sent successfully!");
        }

        async function getSentMails() {
            let email = document.getElementById("viewSenderEmail").value;
            let mails = await mailContract.methods.getMails(email).call();
            let sentMails = mails.filter(mail => mail.sender.toLowerCase() === email.toLowerCase());
            displayMails(sentMails);
        }

        async function getReceivedMails() {
            let email = document.getElementById("viewSenderEmail").value;
            let mails = await mailContract.methods.getMails(email).call();
            let receivedMails = mails.filter(mail => mail.receiver.toLowerCase() === email.toLowerCase());
            displayMails(receivedMails);
        }

        function displayMails(mails) {
            let mailsList = document.getElementById("mailsList");
            mailsList.innerHTML = mails.length ? mails.map(mail => `
                <div>
                    <p><strong>From:</strong> ${mail.sender}</p>
                    <p><strong>To:</strong> ${mail.receiver}</p>
                    <p><strong>Subject:</strong> ${mail.subject}</p>
                    <p>${mail.body}</p>
                    <hr>
                </div>`).join('') : "<p>No mails found.</p>";
        }

        

        async function viewCase() {
            let caseId = document.getElementById("viewCaseId").value;
            let result = await caseContract.methods.viewCase(caseId).call();
            document.getElementById("caseOutput").innerHTML =
                `Case ID: ${result[0]}<br>
                 Title: ${result[1]}<br>
                 Description: ${result[2]}<br>
                 Type: ${["Criminal", "Civil", "Fraud", "Other"][result[3]]}<br>
                 Suspect: ${result[4]}<br>
                 Investigator: ${result[5]}<br>
                 Status: ${["Open", "Investigating", "Closed"][result[6]]}<br>
                 Evidence: ${result[7]}`;
        }

        async function viewAllCases() {
            let results = await caseContract.methods.viewAllCases().call();
            let tableBody = document.querySelector("#allCasesOutput tbody");
            tableBody.innerHTML = "";
            results.forEach(caseData => {
                let row = `<tr>
                    <td>${caseData.caseId}</td>
                    <td>${caseData.caseTitle}</td>
                    <td>${caseData.description}</td>
                    <td>${["Criminal", "Civil", "Fraud", "Other"][caseData.caseType]}</td>
                    <td>${caseData.suspect}</td>
                    <td>${caseData.investigator}</td>
                    <td>${["Open", "Investigating", "Closed"][caseData.status]}</td>
                    <td>${caseData.evidenceExists ? caseData.evidence : "No Evidence"}</td>
                      </tr>`;
                tableBody.innerHTML += row;
            });
        }
       // Function to log out a user
function logoutUser() {
  alert("You have been logged out.");
  localStorage.removeItem("currentUser"); // Clear current session
  location.reload();
}
// Check if user is already logged in
window.onload = function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
      document.getElementById("userName").innerText = currentUser.name;
      document.getElementById("userRole").innerText = currentUser.role;
      document.getElementById("registerSection").classList.add("hidden");
      document.getElementById("loginSection").classList.add("hidden");
      document.getElementById("dashboardSection").classList.remove("hidden");
      updateSidebarPermissions(currentUser.role);
  }
};
        
      
