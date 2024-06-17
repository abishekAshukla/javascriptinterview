// "async" and "defer" attributes are used to load external scripts into web page
// when a web page is loaded there are two things which takes place: 1. HTML parsing, 2. Script loading
// while loading the script, it first fteches the script from network and then executes it.
// there are 3 ways to do this:
// 1. without using "async" "defer":
// in this case: it first starts with parsing the html, and when a script is encountered at that moment it fetches the script and executed it, after that it continues parsing the html.
// <script src="example.js"></script>

// 2.  using "async"
// here, when script is encountered, html parsing and script fetching is performed parallely, then it executes the script and then t again continues parsing the html.
// <script async src="example.js"></script>

// 3. "using defer"
// here, complete html parsing is done firs, along it script is also fetched, after parsing, scripts are executed.
// <script defer src="example.js"></script>

// Note: checkout the image in this folder.
