export default (url) => {
	const section = document.querySelector('section')

	function createElement(type, text, attributes) {
		// verify attributes types
		attributes = attributes || {}

		// create element
		const element = document.createElement(type)
		element.innerHTML = text

		// add attributes
		for (let name in attributes) {
			if (attributes.hasOwnProperty(name)) {
				element.setAttribute(name, attributes[name])
			}
		}

		return element
	}

	const mediumLink = createElement('a', 'here', { href: url, target: '_blank', rel: 'noopener noreferrer' })
	const mediumP = createElement('p', `How did you get here!? If you're not in the in-crowd, I've recently wrote about the DWeb ${mediumLink.outerHTML}. Read up.`)

	const description = createElement('p', 'Each shape represents a ')

	section.appendChild(mediumP)
}