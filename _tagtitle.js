// Format Anki tags in .sourceheading container
(function() {
  const container = document.querySelector('.sourceheading');
  
  if (!container || !container.innerHTML.trim()) {
    return;
  }
  
  // Get tags from container and split by spaces
  const tags = container.innerHTML.trim().split(/\s+/).filter(Boolean);
  
  // Filter to only tags that start with "SOURCE::"
  const sourceTags = tags.filter(tag => tag.startsWith('SOURCE::'));
  
  if (sourceTags.length === 0) {
    return;
  }
  
  // Process each tag
  const formattedTags = sourceTags.map(tag => {
    // Split by :: to handle hierarchical tags
    const parts = tag.split('::').filter(Boolean);
    
    let displayText;
    if (parts.length > 1) {
      // For hierarchical tags, show "penultimate: final"
      // parts[parts.length - 2] is already the penultimate (second to last)
      // parts[parts.length - 1] is already the final (last)
      const penultimate = parts[parts.length - 2].replace(/_/g, ' ');
      const final = parts[parts.length - 1].replace(/_/g, ' ');
      displayText = penultimate + ': ' + final;
    } else {
      // For simple tags, just replace underscores
      displayText = parts[0].replace(/_/g, ' ');
    }
    
    return '<span class="tag">' + displayText + '</span>';
  });
  
  // Update container with formatted tags
  container.innerHTML = formattedTags.join('');
})();