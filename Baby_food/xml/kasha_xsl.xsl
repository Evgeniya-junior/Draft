<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.ord/1999/XSL/Transform">
<xsl:template match="/">
 <html>
  <body>
   <h2>Молочные смеси</h2>
    <xsl:for-each select="product/grupp[@name="Каши"]">
      <xsl:value-of select="var"/>
         <xsl:value-of select="var/poz">
          <xsl:text> </xsl:text>
       </xsl:for-each>
      </body>
    </html>
  </template>
</xsl:stylesheet>
      