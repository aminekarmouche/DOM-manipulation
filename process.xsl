<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>

<xsl:template match="/catalog">

	<html>
		<head>XSL</head>
		<body>
			
			Results
			<xsl:for-each select="book">
				<xsl:value-of select="author"/>
				 
			</xsl:for-each>


		</body>
	</html>

</xsl:template>
</xsl:stylesheet>