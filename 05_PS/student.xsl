<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<body>

<h2>Student Result Table</h2>

<table border="1">

<tr>
<th>Name</th>
<th>Roll</th>
<th>Marks</th>
<th>Result</th>
</tr>

<xsl:for-each select="students/student">

<tr>

<td>
<xsl:value-of select="name"/>
</td>

<td>
<xsl:value-of select="roll"/>
</td>

<td>
<xsl:value-of select="marks"/>
</td>

<td>

<xsl:if test="marks>=40">
Pass
</xsl:if>

<xsl:if test="marks<40">
Fail
</xsl:if>

</td>

</tr>

</xsl:for-each>

</table>

</body>
</html>

</xsl:template>

</xsl:stylesheet>