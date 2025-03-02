// Trimmed, clickable tags script. Requires clickable tags addon for the clicking to do anything: https://ankiweb.net/shared/info/1739176371

  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.prettify-tags > *');

  if (tagsContainerEl.length > 0) {
    var tags = [];
    
    tagsContainerEl.forEach((tagEl) => {
      tagEl.classList.add('prettify-tag');
      var tagContent = tagEl.innerHTML.replace(/_/g, ' '); // Replace underscores with spaces
      tags.push(tagContent);
      
      tags.forEach((tag) => {
        var childTag = tag.split('::').filter(Boolean);
        
        if (childTag.length > 1) {
          tagEl.innerHTML = childTag[childTag.length - 2].trim() + ": " + childTag[childTag.length - 1].trim();
        } else {
          tagEl.innerHTML = childTag[0].trim();
        }
      });
    });

  } else {
    // Create tags if container is empty
    tagsContainerEl = document.querySelector('.prettify-tags');
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean);
    var html = '';
    
    tags.forEach((tag, index) => {
      var childTag = tag.split('::').filter(Boolean);
      var tagContent = '';

      if (childTag.length > 1) {
        tagContent = childTag[childTag.length - 2].replace(/_/g, ' ') + ": " + childTag[childTag.length - 1].replace(/_/g, ' ');
      } else {
        tagContent = childTag[0].replace(/_/g, ' ');
      }

      html += "<span class='prettify-tag'>" + tagContent + '</span>';
    });

    tagsContainerEl.innerHTML = html;
  }
