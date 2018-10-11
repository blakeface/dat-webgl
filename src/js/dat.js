export const dat = {
	isDat: false,
	downloads: 5,
	url: 'dat://3167d872cec0d2896009a4156409b9e1ce89638d030c42be7c4be02f4e967bf7/',
	getDatArchive: function() {
		try	{
			const archive = new DatArchive(url)
			const stat = archive.stat('/index.html')
			this.isDat = true
		}
		catch (e) {
			console.log(`Want to see something cool? Try this out over the dat protocol: ${url}`)
			console.log(`learn more at https://datproject.org/`)
		}
	},
}