export default (url, isDat) => {
	const section = document.querySelector('section')
	const mediumUrl = 'https://medium.com/@blakeface/dat-decentralized-web-tutorial-5ece6238bc84'
	const gitUrl = 'https://github.com/blakeface/dat-webgl'

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

	const mediumLink = createElement('a', 'wrote about the Dweb on Medium', { href: mediumUrl, target: '_blank', rel: 'noopener noreferrer' })
	const mediumP = createElement('p', `You made it this far, but if you're still a little lost, I've recently ${mediumLink.outerHTML}. Read up.`)

	const description = createElement('p', 'Each shape is randomly generated and repreresents a seed. Share amongs your friends and watch the site get weirder and weirder.')

	const sourceCodeLink = createElement('a', 'here', { href: gitUrl, target: '_blank', rel: 'noopener noreferrer' })
	const sourceCode = createElement('p', `Take a look at the source code ${sourceCodeLink.outerHTML}`)

	section.appendChild(mediumP)
	section.appendChild(description)
	section.appendChild(sourceCode)
}