chrome.runtime.onInstalled.addListener(() => {
  const styles = ["bold", "italic", "underline", "strikethrough", "monospace"];
  styles.forEach(style => {
    chrome.contextMenus.create({
      id: style,
      title: style.charAt(0).toUpperCase() + style.slice(1),
      contexts: ["selection"]
    });
  });

  // Create parent menu for bullets
  chrome.contextMenus.create({
    id: 'bullets',
    title: 'Add Bullets',
    contexts: ["selection"]
  });

  // Create bullet sub-menu items
  const bullets = ["●", "◉", "○", "▪", "◇", "◆", "►", "▷", "✓", "✔", "☑", "•", "→", "⇾", "➤", "➔", "➡", "➡️"];
  bullets.forEach(bullet => {
    chrome.contextMenus.create({
      parentId: 'bullets',
      id: `bullet_${bullet}`,
      title: `${bullet} Bullet`,
      contexts: ["selection"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId.startsWith('bullet_')) {
    chrome.tabs.sendMessage(tab.id, {
      action: "addBullets",
      bullet: info.menuItemId.replace('bullet_', ''),
      text: info.selectionText
    });
  } else {
    chrome.tabs.sendMessage(tab.id, {
      action: "transform",
      style: info.menuItemId,
      text: info.selectionText
    });
  }
});