
// Run a function on each entry in a directory
// https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/file.js#L589
// 'entry' is an instance of OS.File.DirectoryIterator.Entry:
// https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/OSFile.jsm/OS.File.DirectoryIterator.Entry
// isDir	boolean, read-only	true if the entry is a directory, false otherwise
// isSymLink	boolean, read-only	true if the entry is a symbolic link, false otherwise
// name	string, read-only	the name of the entry
// path	string, read-only	the full path to the entry
// asynch function  ZoteroFile.iterateDirectory(path, onEntry)

var names = "";
var onentry = asynch function(entry){names+= "|" + entry.name;}
ZoteroFile.iterateDirectory('/data/GDrive/research/biblio', onEntry)


// Create a subcollection of the selected collection

var currentCollection = ZoteroPane.getSelectedCollection();
var collection = new Zotero.Collection();
collection.name = name;
collection.parentID = currentCollection.id;
var collectionID = await collection.saveTx();
return collectionID;
