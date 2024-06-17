// Following are various terms that re used int his concept:
// 1. DOM: It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text.
// 2. DOM tree: The DOM tree is a hierarchical representation of the document's structure, where each node in the tree corresponds to an element, attribute, or piece of text in the HTML. Basically it used to visualize the DOM or structuring of html elements.
// 3. CSSOM: CSS object model represents the styles and layout information defined in the stylesheets.
// 4. HTML parsing: process of analyzing the html code and understand its meaning.
// The HTML parser reads the HTML code of a web page.
// It constructs the Document Object Model (DOM).
// Parsing involves identifying tags, attributes, and their relationships, creating a structure that browsers can understand.
// 5. Rendering: Rendering is the process of converting the information from the parsed HTML, CSS, and JavaScript into pixels on the screen, creating the visual representation of a web page.
// 6. Critical rendering path: The Critical Rendering Path (CRP) is the sequence of steps that a web browser takes to process and render a web page.
// following are the steps of CRP:
// a. HTML document fetching and parsing.
// b. While HTML parsing, When a CSS file is encoutered, stylesheets are fetched and processed by the CSS parser and CSSOM is created. This is a render blocking step, i.e. until this operation is performed the the web page is not rendered. Only after parsing the all CSS files in the documents, rendering continues.
// c. Render tree contruction: The browser combines the DOM and CSSOM to create the Render Tree. The Render Tree is a representation of the visual elements on the page, including only those elements that will be rendered on the browser
// d. layout(reflow): The browser determines the size and position of each visible element.
// e. Painting: The final step is painting, where the browser converts the layout information into pixels on the screen based on Information from render tree.
// f. while all this, if a JS file is encountered, it gets loaded and executed. Explain async and defer here.
