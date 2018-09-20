export const dat = {
	downloads: 5,
	datUrl: 'dat://3167d872cec0d2896009a4156409b9e1ce89638d030c42be7c4be02f4e967bf7/',
	getDatArchive: function() {
		try	{
			const archive = new DatArchive(datUrl)
			const stat = archive.stat('/index.html')
		}
		catch (e) {
			console.log(`Want to see something cool? Try this out over the dat protocol: ${datUrl}`)
			console.log(`learn more at https://datproject.org/`)
		}
	},
}