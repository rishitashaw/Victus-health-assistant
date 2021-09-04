pragma solidity ^0.5.0;

contract HStorage {
  // Name
  string public name = "HStorage";

  // Number of files
  uint256 public fileCount = 0;
  // Mapping fileId=>Struct
  mapping(uint256 => File) public files;

  // Struct
  struct File {
    uint256 fileId;
    string fileHash;
    uint256 fileSize;
    string fileType;
    string fileName;
    string fileDescription;
    string recieverAddress;
    uint256 uploadTime;
    address payable uploader;
  }

  // Event
  event FileUploaded(
    uint256 fileId,
    string fileHash,
    uint256 fileSize,
    string fileType,
    string fileName,
    string fileDescription,
    string recieverAddress,
    uint256 uploadTime,
    address payable uploader
  );

  constructor() public {}

  // Upload File function
  function uploadFile(
    string memory _fileHash,
    uint256 _fileSize,
    string memory _fileType,
    string memory _fileName,
    string memory _fileDescription,
    string memory _recieverAddress
  ) public {
    // Make sure the file hash exists
    require(bytes(_fileHash).length > 0);

    // Make sure file type exists
    require(bytes(_fileType).length > 0);

    // Make sure file description exists
    require(bytes(_fileName).length > 0);

    // Make sure file fileName exists
    require(bytes(_fileDescription).length > 0);

    require(bytes(_recieverAddress).length > 0);


    // Make sure uploader address exists
    require(msg.sender != address(0));

    // Make sure file size is more than 0
    require(_fileSize > 0);

    // Increment file id
    fileCount++;

    // Add File to the contract
    files[fileCount] = File(
      fileCount,
      _fileHash,
      _fileSize,
      _fileType,
      _fileName,
      _fileDescription,
      _recieverAddress,
      now,
      msg.sender
    );

    // Trigger an event
    emit FileUploaded(
      fileCount,
      _fileHash,
      _fileSize,
      _fileType,
      _fileName,
      _fileDescription,
      _recieverAddress,
      now,
      msg.sender
    );
  }
}
