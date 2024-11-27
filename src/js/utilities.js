// export function textSplit(elem) {
//     return new SplitType(elem, { types: "words, chars" })
// }

export function removeScriptsFromBody(scripts) {
  scripts.forEach(script => {
    const bodyScripts = document.body.getElementsByTagName('script');
    for (let i = bodyScripts.length - 1; i >= 0; i--) {
      if (bodyScripts[i].src && bodyScripts[i].src.includes(script)) {
        bodyScripts[i].parentNode.removeChild(bodyScripts[i]);
      }
    }
  });
}

export function addScriptsToBody(scripts) {
  scripts.forEach(script => {
    const scriptElem = document.createElement('script');
    scriptElem.src = script;
    scriptElem.type = 'module';
    document.body.appendChild(scriptElem);
  });
}

export function addFilesCssToBody(cssFiles) {
  cssFiles.forEach(cssFile => {
    const linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href = cssFile;
    document.body.appendChild(linkTag);
  })
}

export function removeCssFilesFromBody(cssFiles) {
  cssFiles.forEach(cssFile => {
      const bodyLinks = document.body.getElementsByTagName('link');
      for (let i = bodyLinks.length - 1; i >= 0; i--) {
          if (bodyLinks[i].href && bodyLinks[i].href.includes(cssFile)) {
              bodyLinks[i].parentNode.removeChild(bodyLinks[i]);
          }
      }
  });
}