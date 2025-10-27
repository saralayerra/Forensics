<div align="center">
  <h1>TRACEFORENSICS</h1>
  <h2>Integrating Autopsy with Blockchain for Steganography-Based Evidence Management in Cybercrime Investigations</h2>
</div>
<h2>Abstract</h2>
<p>
The rising complexity of cybercrimes presents major challenges for digital forensic investigators in recovering, preserving, and authenticating critical evidence. Cybercriminals increasingly use advanced techniques such as <strong>steganography</strong> to conceal illicit data within digital images, making detection and analysis difficult. Traditional forensic tools can recover deleted files but often fail to ensure the <strong>integrity</strong>, <strong>security</strong>, and <strong>traceability</strong> of evidence throughout the investigative process.
</p>

<p>
This research, <strong>TraceForensics</strong>, addresses these challenges by integrating forensic analysis with <strong>blockchain technology</strong> to create a secure, immutable, and transparent framework for managing digital evidence—including detecting and analyzing steganography used to hide sensitive information. The system enables investigators to recover deleted files, extract hidden data through steganographic decoding, and securely store all case-related details on a blockchain ledger. By combining advanced forensic methods with blockchain’s immutability, TraceForensics ensures that evidence remains tamper-proof, traceable, and legally admissible. This prototype enhances the reliability and credibility of digital forensic investigations, promoting fair and effective legal proceedings.
</p>

<p><strong>Keywords:</strong> Cybercrime, Digital Forensics, Blockchain, Steganography, Evidence Integrity</p>

<h2>1. Introduction</h2>
<p>
In today’s digital age, the complexity of cybercrimes continues to escalate, posing severe challenges for cybersecurity and digital investigations. Criminals use sophisticated techniques to evade detection, making it increasingly difficult for forensic professionals to recover, verify, and preserve critical digital evidence. Among these techniques, <strong>steganography</strong>—the art of hiding information within multimedia files—has become a major concern, as it enables offenders to embed illicit data such as financial transactions or malicious payloads within harmless-looking images or videos.
</p>

<p>
Traditional forensic tools can retrieve deleted files but lack the ability to ensure continuous integrity and traceability of digital evidence. This gap poses legal and technical barriers to prosecuting cybercriminals and underscores the need for a more <strong>secure, transparent, and tamper-proof</strong> forensic framework.
</p>

<p>
Real-world incidents highlight this necessity. The <strong>Silk Road darknet marketplace</strong> case demonstrated how encrypted communications and steganographic messages hindered law enforcement investigations. Similarly, the <strong>2014 Sony Pictures cyberattack</strong> showed how attackers concealed malicious code within benign files, bypassing security systems and leaking sensitive corporate data. These incidents emphasize the urgency for advanced forensic mechanisms that can not only detect concealed information but also ensure the authenticity and admissibility of evidence.
</p>

<p>
To overcome these challenges, <strong>TraceForensics</strong> integrates forensic analysis tools such as <em>Autopsy</em> with blockchain technology. The system operates in two main stages: (1) recovering deleted or hidden files through forensic and steganographic analysis, and (2) securely recording all extracted evidence and case data on a blockchain ledger. Blockchain’s decentralized and immutable nature guarantees that digital evidence remains unaltered, verifiable, and traceable, creating a transparent and legally defensible chain of custody.
</p>

<p>
By merging the robustness of forensic analysis with blockchain’s security framework, TraceForensics strengthens the accuracy, integrity, and legal reliability of cybercrime investigations. This approach not only improves digital evidence management but also supports law enforceme
<h2>Case Management and Evidence Collection</h2>
<p>
The system enables investigators to create and manage digital crime cases with structured metadata, including <strong>case ID</strong>, <strong>status</strong>, <strong>suspect information</strong>, and detailed incident descriptions. 
Evidence is collected from seized storage devices using forensic tools such as <em>Autopsy</em>, which is integrated into our system to automate the retrieval of deleted or hidden files.
</p>

<h3>Steganography-Based Hidden Data Detection</h3>
<p>
Once image-based evidence is collected, the system applies advanced <strong>steganalysis techniques</strong> to detect and decode hidden messages or illicit information embedded within images using 
<strong>Least Significant Bit (LSB)</strong> or transform domain methods. This process allows forensic analysts to uncover concealed data that conventional forensic software might overlook.
</p>

<h3>Blockchain-Enabled Evidence Logging</h3>
<p>
To ensure data integrity and non-repudiation, decoded content and other forensic artifacts are <strong>hashed and stored on a private blockchain ledger</strong>. 
Each ledger transaction contains a cryptographic hash of the evidence, a timestamp, the case ID, and the role of the user performing the action. 
This creates an <strong>immutable audit trail</strong>, preventing tampering or unauthorized alterations throughout the investigation lifecycle.
</p>

<h3>Role-Based Access and Chain of Custody</h3>
<p>
The platform employs a <strong>Role-Based Access Control (RBAC)</strong> mechanism to assign privileges to forensic analysts, investigators, steganographers, and judicial authorities. 
Every action taken on a piece of evidence is logged and verifiable, maintaining a <strong>transparent chain of custody</strong> that is crucial for legal admissibility.
</p>

<h3>Evidence Visualization and Reporting</h3>
<p>
Investigators can view decoded content, generate <strong>court-admissible reports</strong>, and present the blockchain-backed forensic timeline to judicial authorities. 
A user-friendly interface ensures easy navigation, while backend services handle cryptographic operations and real-time data verification.
</p>

<h3> Notification and Collaboration</h3>
<p>
The system facilitates collaboration between investigators, analysts, and legal entities by generating notifications for case updates, evidence uploads, and blockchain transactions. 
This ensures that all stakeholders remain informed and aligned throughout the investigation.

<p>
The proposed blockchain-based cybercrime investigation system consists of three main modules:
<strong>User Registration Module</strong>, <strong>Case Entry Module</strong>, and <strong>Evidence Management Module</strong>. 
These components collectively ensure secure and tamper-proof handling of digital evidence, leveraging blockchain’s transparency and immutability.
</p>


<p>
Only authorized users registered by the administrator can access the system. 
This module enforces authentication and maintains the integrity of user roles within the TraceForensics platform.
</p>


<p>
In the Case Entry Module, investigators can enter details of ongoing cases. 
These records are securely stored on the blockchain, ensuring that all information remains immutable and accessible only to authorized personnel. 
This module enables efficient organization and management of case-related data.
</p>



<p>
The Evidence Management Module is central to the investigation process. 
Suspects may use steganography and delete the resulting images from their systems. 
Forensic analysts can <strong>retrieve deleted images</strong> using <em>Autopsy</em>, after which steganographers <strong>extract hidden messages</strong> from the recovered files. 
Investigators then upload this digital evidence and store it securely on the blockchain.
</p>


<h3>LSB Steganography for Decoding Hidden Content</h3>
<p><strong>Algorithm 1: Decoding Text from an Encoded Image</strong></p>

<pre>
<b>Input:</b> Encoded Image
<b>Output:</b> Decoded Message

<b>Procedure:</b>
1. Load the Encoded Image (Eimg)
   - Open the image file containing the hidden message.
   - Ensure it is in RGB mode for structured access to R, G, and B channels.

2. Extract Pixel Data
   - Convert Eimg into a 3D array of pixel values:
     Pixel(i, j) = [R_ij, G_ij, B_ij]

3. Retrieve LSBs to Form Binary String
   - Traverse each pixel and extract the Least Significant Bit (LSB) of each color channel.
   - Concatenate LSB_R + LSB_G + LSB_B → B
   - Continue until message length or delimiter is reached.

4. Group Binary into Bytes
   - Split binary string B into 8-bit groups.

5. Convert Binary to Characters
   - Convert each 8-bit binary value to ASCII:
     Example: 01000001 → 65 → 'A'

6. Combine Characters
   - Concatenate characters sequentially to form the decoded message.

7. Return Message
   - Display or return the hidden text message.
</pre>

<h3>Implementation</h3>
<p>
To address the challenges highlighted earlier, TraceForensics integrates <strong>steganography</strong>, <strong>digital forensics</strong>, and <strong>blockchain-based evidence management</strong> to create a secure framework for digital investigations.
</p>

<h4>Forensic Tool: Autopsy</h4>
<p>
<em>Autopsy</em>, an open-source forensic tool, plays a crucial role in retrieving deleted files and analyzing them forensically. 
The process begins by creating a new case, specifying the target storage device or directory, and scanning it to extract metadata and recover deleted files. 
Autopsy’s ability to restore lost data ensures that vital digital evidence is preserved and available for deeper analysis.
</p>

<h4>Blockchain-Based Evidence Management</h4>
<p>
All recovered and decoded evidence is hashed and stored on a private blockchain network. 
This blockchain implementation guarantees <strong>immutability</strong>, <strong>data provenance</strong>, and <strong>traceability</strong> of evidence throughout its lifecycle, reinforcing the credibility of digital forensic investigations.
</p>
