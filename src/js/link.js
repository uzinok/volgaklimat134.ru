document.addEventListener('DOMContentLoaded', function() {
    if(document.querySelector('[data-target="_blank"]')) {

        let links = document.querySelectorAll('[data-target="_blank"]');

        for (let i = 0; i < links.length; i++) {

            let attrrLink = links[i].getAttribute('href');

            let targetLink = document.createElement('a');
            targetLink.classList.add('targetLink');
            targetLink.setAttribute('href', links[i].getAttribute('href'));
            targetLink.setAttribute('target', '_blank');
            let linkText = links[i].innerHTML;
            targetLink.setAttribute('aria-label', 'открыть ссылку "' + linkText + '" в новом окне');

            
            parentElem = links[i].parentNode;
            parentElem.insertBefore(targetLink, links[i]);
            parentElem.insertBefore(links[i], targetLink);

        }
    }
})