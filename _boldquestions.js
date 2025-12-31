// Bold question words in .heading2 elements
(function() {
  const headings = document.querySelectorAll('.heading2');
  
  if (headings.length === 0) {
    return;
  }
  
  // Question words to bold (case-insensitive)
  const questionWords = [
    'why', 'what', 'who', 'when', 'where', 
    'describe', 'outline', 'recall', 'how',
    'which', 'whose', 'whom'
  ];
  
  // Create regex pattern that matches question words at start of text or after punctuation/whitespace
  // Uses word boundaries to avoid matching parts of words
  const pattern = new RegExp(
    '\\b(' + questionWords.join('|') + ')\\b',
    'gi'
  );
  
  headings.forEach(heading => {
    // Process all text nodes within the heading
    processTextNodes(heading);
  });
  
  function processTextNodes(element) {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    const textNodes = [];
    let node;
    
    // Collect all text nodes first (to avoid modifying while iterating)
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    
    // Process each text node
    textNodes.forEach(textNode => {
      const text = textNode.textContent;
      
      // Check if text contains any question words
      if (pattern.test(text)) {
        // Create a temporary container
        const temp = document.createElement('span');
        
        // Replace question words with bold wrapped versions
        temp.innerHTML = text.replace(pattern, '<strong style="font-size: 1.5em;">$1</strong>');
        
        // Replace the text node with the new content
        const parent = textNode.parentNode;
        while (temp.firstChild) {
          parent.insertBefore(temp.firstChild, textNode);
        }
        parent.removeChild(textNode);
      }
    });
  }
})();
