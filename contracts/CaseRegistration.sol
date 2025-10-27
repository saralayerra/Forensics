// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CaseRegistration {
    enum CaseType { Criminal, Civil, Fraud, Other }
    enum CaseStatus { Open, Investigating, Closed }

    struct Case {
        uint caseId;
        string caseTitle;
        string description;
        CaseType caseType;
        string suspect;
        string investigator;
        CaseStatus status;
        string evidence;
        bool evidenceExists;
    }

    mapping(uint => Case) private cases;
    uint[] private caseIds;
    address public owner;

    event CaseCreated(uint caseId, string caseTitle);
    event CaseUpdated(uint caseId, CaseStatus status, string evidence);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function newCase(
        uint _caseId,
        string memory _caseTitle,
        string memory _description,
        CaseType _caseType,
        string memory _suspect,
        string memory _investigator
    ) public onlyOwner {
        require(cases[_caseId].caseId == 0, "Case ID already exists");
        
        cases[_caseId] = Case({
            caseId: _caseId,
            caseTitle: _caseTitle,
            description: _description,
            caseType: _caseType,
            suspect: _suspect,
            investigator: _investigator,
            status: CaseStatus.Open,
            evidence: "",
            evidenceExists: false
        });

        caseIds.push(_caseId);
        emit CaseCreated(_caseId, _caseTitle);
    }

    function updateCase(uint _caseId, CaseStatus _status, string memory _evidence) public onlyOwner {
        require(cases[_caseId].caseId != 0, "Case does not exist");

        cases[_caseId].status = _status;
        if (bytes(_evidence).length > 0) {
            cases[_caseId].evidence = _evidence;
            cases[_caseId].evidenceExists = true;
        }

        emit CaseUpdated(_caseId, _status, _evidence);
    }

    function viewCase(uint _caseId) public view returns (
        uint, string memory, string memory, CaseType, string memory, string memory, CaseStatus, string memory
    ) {
        require(cases[_caseId].caseId != 0, "Case not found");
        Case memory c = cases[_caseId];

        return (c.caseId, c.caseTitle, c.description, c.caseType, c.suspect, c.investigator, c.status, c.evidenceExists ? c.evidence : "No Evidence");
    }

    function viewAllCases() public view returns (Case[] memory) {
        uint count = caseIds.length;
        Case[] memory allCases = new Case[](count);

        for (uint i = 0; i < count; i++) {
            allCases[i] = cases[caseIds[i]];
        }

        return allCases;
    }
}
